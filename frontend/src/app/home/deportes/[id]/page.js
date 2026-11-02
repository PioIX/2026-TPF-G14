"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import Button from "@/components/Button"
import CardEquipo from "@/components/CardEquipo"
import CardCompetencia from "@/components/CardCompetencia"
import { convertirFecha, hoySinHora } from "@/utils/fechas"
import styles from "../../detalle.module.css"

export default function DeporteDetallePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlParams = useParams()

  const idDeporte = Number(urlParams.id)

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [deporte, setDeporte] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [equipos, setEquipos] = useState([])
  const [competencias, setCompetencias] = useState([])
  const [jugadores, setJugadores] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/deportes/${idDeporte}`)
      .then((response) => response.json())
      .then((data) => {
        setDeporte(data)
        setCargando(false)
      })
      .catch(() => setCargando(false))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => {
        const lista = Array.isArray(data) ? data : []
        setEquipos(lista.filter((equipo) => equipo.id_deporte === idDeporte))
      })
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => {
        const lista = Array.isArray(data) ? data : []
        setCompetencias(lista.filter((competencia) => competencia.id_deporte === idDeporte))
      })
      .catch(() => setCompetencias([]))

    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => setJugadores(Array.isArray(data) ? data : []))
      .catch(() => setJugadores([]))
  }, [idDeporte])

  const volver = () => {
    router.push(`/home/deportes?${params}`)
  }

  const contarJugadores = (idEquipo) => {
    return jugadores.filter((jugador) => jugador.id_equipo === idEquipo).length
  }

  const hoy = hoySinHora()

  const estadoCompetencia = (competencia) => {
    const inicio = convertirFecha(competencia.fecha_inicio)
    const fin = convertirFecha(competencia.fecha_fin)
    if (!inicio) return { texto: "Sin fecha", proximo: false }
    if (inicio > hoy) return { texto: "Próxima", proximo: true }
    if (!fin || fin >= hoy) return { texto: "En curso", proximo: true }
    return { texto: "Finalizada", proximo: false }
  }

  if (cargando) {
    return <div className={styles.contenedor}>Cargando...</div>
  }

  if (!deporte) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.volver}>
          <Button onClick={volver}>← Volver a deportes</Button>
        </div>
        <h1 className={styles.titulo}>Deporte no encontrado</h1>
      </div>
    )
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.volver}>
        <Button onClick={volver}>← Volver a deportes</Button>
      </div>

      <span className={styles.etiqueta}>DEPORTE / {deporte.es_equipo ? "EN EQUIPO" : "INDIVIDUAL"}</span>
      <h1 className={styles.titulo}>{deporte.nombre}</h1>
      {deporte.descrpcion && <p className={styles.descripcion}>{deporte.descrpcion}</p>}

      <h2 className={styles.seccionTitulo}>Competencias</h2>
      {competencias.length === 0 ? (
        <div className={styles.vacio}>Todavía no hay competencias de este deporte.</div>
      ) : (
        <div className={styles.grilla}>
          {competencias.map((competencia) => {
            const estado = estadoCompetencia(competencia)
            return (
              <CardCompetencia
                key={competencia.id_competencia}
                tipo={"Competencia"}
                nombre={competencia.nombre}
                deporte={deporte.nombre}
                fecha={convertirFecha(competencia.fecha_inicio)}
                estado={estado.texto}
                proximo={estado.proximo}
                onClick={() => router.push(`/home/competencias/${competencia.id_competencia}?${params}`)}
              />
            )
          })}
        </div>
      )}

      <h2 className={styles.seccionTitulo}>Equipos</h2>
      {equipos.length === 0 ? (
        <div className={styles.vacio}>Todavía no hay equipos de este deporte.</div>
      ) : (
        <div className={styles.grilla}>
          {equipos.map((equipo) => (
            <CardEquipo
              key={equipo.id_equipo}
              nombre={equipo.nombre}
              logo={equipo.logo_url}
              deporte={deporte.nombre}
              competencia={equipo.descripcion}
              cantidadJugadores={contarJugadores(equipo.id_equipo)}
              onClick={() => router.push(`/home/equipos/${equipo.id_equipo}?${params}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
