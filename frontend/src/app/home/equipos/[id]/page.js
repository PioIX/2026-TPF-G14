"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import Button from "@/components/Button"
import Escudo from "@/components/Escudo"
import CardJugador from "@/components/CardJugador"
import FilaPartido from "@/components/FilaPartido"
import styles from "../../detalle.module.css"

export default function EquipoDetallePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlParams = useParams()

  const idEquipo = Number(urlParams.id)

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [equipo, setEquipo] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [equipos, setEquipos] = useState([])
  const [deportes, setDeportes] = useState([])
  const [jugadores, setJugadores] = useState([])
  const [partidos, setPartidos] = useState([])
  const [competencias, setCompetencias] = useState([])
  const [inscripciones, setInscripciones] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/equipos/${idEquipo}`)
      .then((response) => response.json())
      .then((data) => {
        setEquipo(data)
        setCargando(false)
      })
      .catch(() => setCargando(false))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : []))
      .catch(() => setDeportes([]))

    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => {
        const lista = Array.isArray(data) ? data : []
        setJugadores(lista.filter((jugador) => jugador.id_equipo === idEquipo))
      })
      .catch(() => setJugadores([]))

    fetch("http://localhost:4000/partidos")
      .then((response) => response.json())
      .then((data) => {
        const lista = Array.isArray(data) ? data : []
        setPartidos(
          lista.filter(
            (partido) => partido.id_equipo_local === idEquipo || partido.id_equipo_visitante === idEquipo
          )
        )
      })
      .catch(() => setPartidos([]))

    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => setCompetencias(Array.isArray(data) ? data : []))
      .catch(() => setCompetencias([]))

    fetch("http://localhost:4000/equipos_competencias")
      .then((response) => response.json())
      .then((data) => {
        const lista = Array.isArray(data) ? data : []
        setInscripciones(lista.filter((inscripcion) => inscripcion.id_equipo === idEquipo))
      })
      .catch(() => setInscripciones([]))
  }, [idEquipo])

  const volver = () => {
    router.push(`/home/equipos?${params}`)
  }

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const buscarEquipo = (idBuscado) => {
    return equipos.find((e) => e.id_equipo === idBuscado)
  }

  // Competencias: las inscriptas y las de los partidos que jugó
  const idsCompetencias = []
  inscripciones.forEach((inscripcion) => {
    if (!idsCompetencias.includes(inscripcion.id_competencia)) {
      idsCompetencias.push(inscripcion.id_competencia)
    }
  })
  partidos.forEach((partido) => {
    if (!idsCompetencias.includes(partido.id_competencia)) {
      idsCompetencias.push(partido.id_competencia)
    }
  })
  const competenciasEquipo = competencias.filter((c) => idsCompetencias.includes(c.id_competencia))

  const jugadoresOrdenados = [...jugadores].sort((a, b) => Number(a.posicion) - Number(b.posicion))

  // El partido más reciente arriba
  const partidosOrdenados = [...partidos].sort((a, b) => {
    const textoA = `${String(a.fecha).slice(0, 10)} ${a.hora}`
    const textoB = `${String(b.fecha).slice(0, 10)} ${b.hora}`
    return textoB.localeCompare(textoA)
  })

  if (cargando) {
    return <div className={styles.contenedor}>Cargando...</div>
  }

  if (!equipo) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.volver}>
          <Button onClick={volver}>← Volver a equipos</Button>
        </div>
        <h1 className={styles.titulo}>Equipo no encontrado</h1>
      </div>
    )
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.volver}>
        <Button onClick={volver}>← Volver a equipos</Button>
      </div>

      <div className={styles.encabezado}>
        <Escudo imagen={equipo.logo_url} nombre={equipo.nombre} tamaño={"grande"} />
        <div>
          <span className={styles.etiqueta}>EQUIPO / {nombreDeporte(equipo.id_deporte)}</span>
          <h1 className={styles.titulo}>{equipo.nombre}</h1>
          {equipo.descripcion && <p className={styles.descripcion}>{equipo.descripcion}</p>}
        </div>
      </div>

      <div className={styles.datos}>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Deporte</span>
          <span className={styles.datoValor}>{nombreDeporte(equipo.id_deporte)}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Jugadores</span>
          <span className={styles.datoValor}>{jugadores.length}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Competencias</span>
          <span className={styles.datoValor}>{competenciasEquipo.length}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Partidos</span>
          <span className={styles.datoValor}>{partidos.length}</span>
        </div>
      </div>

      {competenciasEquipo.length > 0 && (
        <>
          <h2 className={styles.seccionTitulo}>Competencias</h2>
          <div className={styles.chips}>
            {competenciasEquipo.map((competencia) => (
              <button
                key={competencia.id_competencia}
                className={styles.chip}
                onClick={() => router.push(`/home/competencias/${competencia.id_competencia}?${params}`)}
              >
                {competencia.nombre}
              </button>
            ))}
          </div>
        </>
      )}

      <h2 className={styles.seccionTitulo}>Plantel</h2>
      {jugadoresOrdenados.length === 0 ? (
        <div className={styles.vacio}>Este equipo todavía no tiene jugadores cargados.</div>
      ) : (
        <div className={styles.grilla}>
          {jugadoresOrdenados.map((jugador) => (
            <CardJugador
              key={jugador.id_jugadores}
              nombre={jugador.nombre}
              apellido={jugador.apellido}
              imagen={jugador.imagen_url}
              posicion={jugador.posicion}
              deporte={jugador.nacionalidad}
              equipo={equipo.nombre}
              onClick={() => router.push(`/home/jugadores/${jugador.id_jugadores}?${params}`)}
            />
          ))}
        </div>
      )}

      <h2 className={styles.seccionTitulo}>Partidos</h2>
      {partidosOrdenados.length === 0 ? (
        <div className={styles.vacio}>Este equipo todavía no tiene partidos.</div>
      ) : (
        <div className={styles.lista}>
          {partidosOrdenados.map((partido) => (
            <FilaPartido
              key={partido.id_partido}
              partido={partido}
              local={buscarEquipo(partido.id_equipo_local)}
              visitante={buscarEquipo(partido.id_equipo_visitante)}
              onClick={() => router.push(`/home/partidos/${partido.id_partido}?${params}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
