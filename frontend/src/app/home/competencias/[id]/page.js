"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import useSocket from "@/hooks/useSocket"
import Button from "@/components/Button"
import Escudo from "@/components/Escudo"
import FilaPartido from "@/components/FilaPartido"
import { convertirFecha, formatearFecha, hoySinHora } from "@/utils/fechas"
import styles from "./page.module.css"

export default function CompetenciaDetallePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlParams = useParams()
  const { socket } = useSocket({ serverUrl: "http://localhost:4000" })

  const idCompetencia = Number(urlParams.id)

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [competencia, setCompetencia] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [deportes, setDeportes] = useState([])
  const [equipos, setEquipos] = useState([])
  const [partidos, setPartidos] = useState([])
  const [inscripciones, setInscripciones] = useState([])
  const [filtroPartidos, setFiltroPartidos] = useState("todos")

  useEffect(() => {
    fetch(`http://localhost:4000/competencias/${idCompetencia}`)
      .then((response) => response.json())
      .then((data) => {
        setCompetencia(data)
        setCargando(false)
      })
      .catch(() => setCargando(false))

    fetch("http://localhost:4000/partidos")
      .then((response) => response.json())
      .then((data) => {
        const lista = Array.isArray(data) ? data : []
        setPartidos(lista.filter((partido) => partido.id_competencia === idCompetencia))
      })
      .catch(() => setPartidos([]))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : []))
      .catch(() => setDeportes([]))

    fetch("http://localhost:4000/equipos_competencias")
      .then((response) => response.json())
      .then((data) => {
        const lista = Array.isArray(data) ? data : []
        setInscripciones(lista.filter((inscripcion) => inscripcion.id_competencia === idCompetencia))
      })
      .catch(() => setInscripciones([]))
  }, [idCompetencia])

  // Se une a la sala de cada partido para que los marcadores se actualicen en vivo
  const idsPartidos = partidos.map((partido) => partido.id_partido).join(",")

  useEffect(() => {
    if (!socket || idsPartidos === "") return

    const ids = idsPartidos.split(",")

    const unirse = () => {
      ids.forEach((idPartido) => {
        socket.emit("join_room", { tipo_sala: "partido", id_sala: idPartido })
      })
    }

    const onPartidoActualizado = (data) => {
      setPartidos((anteriores) =>
        anteriores.map((partido) =>
          String(partido.id_partido) === String(data.id_partido)
            ? { ...partido, resultado: data.resultado }
            : partido
        )
      )
    }

    unirse()
    socket.on("connect", unirse)
    socket.on("partido_actualizado", onPartidoActualizado)

    return () => {
      socket.off("connect", unirse)
      socket.off("partido_actualizado", onPartidoActualizado)
      ids.forEach((idPartido) => {
        socket.emit("leave_room", { tipo_sala: "partido", id_sala: idPartido })
      })
    }
  }, [socket, idsPartidos])

  const onChangeFiltro = (event) => {
    setFiltroPartidos(event.target.value)
  }

  const volver = () => {
    router.push(`/home/competencias?${params}`)
  }

  const buscarEquipo = (idEquipo) => {
    return equipos.find((equipo) => equipo.id_equipo === idEquipo)
  }

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const verPartido = (idPartido) => {
    router.push(`/home/partidos/${idPartido}?${params}`)
  }

  const verEquipo = (idEquipo) => {
    router.push(`/home/equipos/${idEquipo}?${params}`)
  }

  // Equipos que participan: los inscriptos y también los que aparecen en algún partido
  const idsParticipantes = []
  inscripciones.forEach((inscripcion) => {
    if (!idsParticipantes.includes(inscripcion.id_equipo)) {
      idsParticipantes.push(inscripcion.id_equipo)
    }
  })
  partidos.forEach((partido) => {
    if (!idsParticipantes.includes(partido.id_equipo_local)) {
      idsParticipantes.push(partido.id_equipo_local)
    }
    if (!idsParticipantes.includes(partido.id_equipo_visitante)) {
      idsParticipantes.push(partido.id_equipo_visitante)
    }
  })

  const participantes = idsParticipantes
    .map((idEquipo) => {
      const equipo = buscarEquipo(idEquipo)
      const inscripcion = inscripciones.find((i) => i.id_equipo === idEquipo)
      return equipo ? { ...equipo, posicion: inscripcion ? inscripcion.posicion : null } : null
    })
    .filter((equipo) => equipo !== null)

  const hoy = hoySinHora()

  const partidosFiltrados = partidos.filter((partido) => {
    const fecha = convertirFecha(partido.fecha)
    if (filtroPartidos === "proximos") {
      return fecha && fecha >= hoy
    }
    if (filtroPartidos === "jugados") {
      return fecha && fecha <= hoy
    }
    return true
  })

  // Ordena por fecha y hora (el más viejo arriba)
  const partidosOrdenados = [...partidosFiltrados].sort((a, b) => {
    const textoA = `${String(a.fecha).slice(0, 10)} ${a.hora}`
    const textoB = `${String(b.fecha).slice(0, 10)} ${b.hora}`
    return textoA.localeCompare(textoB)
  })

  if (cargando) {
    return <div className={styles.contenedor}>Cargando...</div>
  }

  if (!competencia) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.volver}>
          <Button onClick={volver}>← Volver a competencias</Button>
        </div>
        <h1 className={styles.titulo}>Competencia no encontrada</h1>
      </div>
    )
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.volver}>
        <Button onClick={volver}>← Volver a competencias</Button>
      </div>

      <span className={styles.etiqueta}>COMPETENCIA / {nombreDeporte(competencia.id_deporte)}</span>
      <h1 className={styles.titulo}>{competencia.nombre}</h1>
      {competencia.descrpcion && <p className={styles.descripcion}>{competencia.descrpcion}</p>}

      <div className={styles.datos}>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Deporte</span>
          <span className={styles.datoValor}>{nombreDeporte(competencia.id_deporte)}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Inicio</span>
          <span className={styles.datoValor}>{formatearFecha(competencia.fecha_inicio)}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Fin</span>
          <span className={styles.datoValor}>{formatearFecha(competencia.fecha_fin)}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Partidos</span>
          <span className={styles.datoValor}>{partidos.length}</span>
        </div>
      </div>

      <div className={styles.seccionCabecera}>
        <h2 className={styles.seccionTitulo}>Partidos</h2>
        <select className={styles.select} value={filtroPartidos} onChange={onChangeFiltro}>
          <option value="todos">Todos</option>
          <option value="proximos">Próximos</option>
          <option value="jugados">Jugados</option>
        </select>
      </div>

      {partidosOrdenados.length === 0 ? (
        <div className={styles.vacio}>
          {partidos.length === 0
            ? "Esta competencia todavía no tiene partidos cargados."
            : "No hay partidos con ese filtro."}
          {es_admin === "1" && partidos.length === 0 && (
            <span> Podés agregarlos desde el panel de administración.</span>
          )}
        </div>
      ) : (
        <div className={styles.lista}>
          {partidosOrdenados.map((partido) => (
            <FilaPartido
              key={partido.id_partido}
              partido={partido}
              local={buscarEquipo(partido.id_equipo_local)}
              visitante={buscarEquipo(partido.id_equipo_visitante)}
              onClick={() => verPartido(partido.id_partido)}
            />
          ))}
        </div>
      )}

      <h2 className={styles.seccionTitulo}>Equipos participantes</h2>

      {participantes.length === 0 ? (
        <div className={styles.vacio}>Todavía no hay equipos inscriptos.</div>
      ) : (
        <div className={styles.grilla}>
          {participantes.map((equipo) => (
            <button key={equipo.id_equipo} className={styles.equipo} onClick={() => verEquipo(equipo.id_equipo)}>
              <Escudo imagen={equipo.logo_url} nombre={equipo.nombre} tamaño={"chico"} />
              <div className={styles.equipoDatos}>
                <span className={styles.equipoNombre}>{equipo.nombre}</span>
                {equipo.posicion && <span className={styles.equipoPosicion}>Posición: {equipo.posicion}</span>}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
