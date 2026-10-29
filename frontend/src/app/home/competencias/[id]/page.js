"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import useSocket from "@/hooks/useSocket"
import Input from "@/components/Input"
import Button from "@/components/Button"
import styles from "./page.module.css"

export default function PartidoSalaPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlParams = useParams()
  const { socket, isConnected } = useSocket({ serverUrl: "http://localhost:4000" })

  const idPartido = urlParams.id

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [partido, setPartido] = useState(null)
  const [equipos, setEquipos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [nuevoResultadoLocal, setNuevoResultadoLocal] = useState(0)
  const [nuevoResultadoVisitante, setNuevoResultadoVisitante] = useState(0)
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4000/partidos/${idPartido}`)
      .then((response) => response.json())
      .then((data) => {
        setPartido(data)
        setCargando(false)
      })
      .catch(() => setCargando(false))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))
  }, [idPartido])

  useEffect(() => {
    if (!socket) return

    socket.emit("join_room", { tipo_sala: "partido", id_sala: idPartido })

    const onPartidoActualizado = (data) => {
      setPartido((anterior) => (anterior ? { ...anterior, resultado: data.resultado } : anterior))
      setUltimaActualizacion(new Date())
    }

    socket.on("partido_actualizado", onPartidoActualizado)

    return () => {
      socket.off("partido_actualizado", onPartidoActualizado)
      socket.emit("leave_room", { tipo_sala: "partido", id_sala: idPartido })
    }
  }, [socket, idPartido])

  const onChangeResultadoLocal = (event) => {
    setNuevoResultadoLocal(event.target.value)
    console.log(nuevoResultadoLocal)
  }

  const onChangeResultadoVisitante = (event) => {
    setNuevoResultadoVisitante(event.target.value)
    console.log(setNuevoResultadoVisitante)

  }

  const actualizarResultado = () => {
    if (nuevoResultadoVisitante === null || nuevoResultadoLocal === null ) {
      alert("El resultado debe ser numérico")
      return
    }
  
    let resultadoAdaptado = Number(nuevoResultadoLocal) * 1000 + Number(nuevoResultadoVisitante);
    console.log(resultadoAdaptado);
    socket.emit("actualizar_partido", {
      id_partido: idPartido,
      resultado: Number(resultadoAdaptado),
    });
  }

  const volver = () => {
    if (partido && partido.id_competencia) {
      router.push(`/home/competencias/${partido.id_competencia}?${params}`)
    } else {
      router.push(`/home/competencias?${params}`)
    }
  }

  const nombreEquipo = (idEquipo) => {
    const equipo = equipos.find((e) => e.id_equipo === idEquipo)
    return equipo ? equipo.nombre : "A definir"
  }

  const formatearFecha = (valor) => {
    if (!valor) {
      return "Sin fecha"
    }
    const fecha = new Date(`${String(valor).slice(0, 10)}T00:00:00`)
    return isNaN(fecha.getTime()) ? "Sin fecha" : fecha.toLocaleDateString("es-AR")
  }

  const formatearHora = (valor) => {
    return valor ? String(valor).slice(0, 5) : "--:--"
  }

  if (cargando) {
    return <div className={styles.contenedor}>Cargando...</div>
  }

  if (!partido) {
    return (
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Partido no encontrado</h1>
        <div className={styles.volver}>
          <Button onClick={volver}>← Volver</Button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.volver}>
        <Button onClick={volver}>← Volver a la competencia</Button>
      </div>

      <span className={styles.etiqueta}>
        SALA EN VIVO / {isConnected ? "CONECTADO" : "DESCONECTADO"}
      </span>
      <h1 className={styles.titulo}>
        {nombreEquipo(partido.id_equipo_local)} vs {nombreEquipo(partido.id_equipo_visitante)}
      </h1>

      <div className={styles.marcador}>
        <span className={styles.marcadorEtiqueta}>Resultado:</span>
        <span className={styles.marcadorValor}>
        {nuevoResultadoLocal} - {nuevoResultadoVisitante}
        </span>
        {ultimaActualizacion && (
          <span className={styles.marcadorHora}>
            Actualizado a las {ultimaActualizacion.toLocaleTimeString("es-AR")}
          </span>
        )}
      </div>

      <div className={styles.datos}>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Fecha</span>
          <span className={styles.datoValor}>{formatearFecha(partido.fecha)}</span>
        </div>

        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Hora</span>
          <span className={styles.datoValor}>{formatearHora(partido.hora)} hs</span>
        </div>

        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Lugar</span>
          <span className={styles.datoValor}>{partido.lugar}</span>
        </div>
      </div>

      {es_admin === "1" && (
        <div className={styles.admin}>
          <h2 className={styles.adminTitulo}>Panel del administrador</h2>
          <Input onChange={onChangeResultadoVisitante} placeholder={nombreEquipo(partido.id_equipo_visitante)} value={nuevoResultadoVisitante} type={"number"} />
          <Input onChange={onChangeResultadoLocal} placeholder={nombreEquipo(partido.id_equipo_local)} value={nuevoResultadoLocal} type={"number"} />
          <Button onClick={actualizarResultado}>Publicar resultado</Button>
        </div>
      )}
    </div>
  )
}