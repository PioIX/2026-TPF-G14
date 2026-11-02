"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import Button from "@/components/Button"
import Escudo from "@/components/Escudo"
import CardJugador from "@/components/CardJugador"
import { formatearFecha, calcularEdad } from "@/utils/fechas"
import styles from "../../detalle.module.css"

export default function JugadorDetallePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlParams = useParams()

  const idJugador = Number(urlParams.id)

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [jugador, setJugador] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [jugadores, setJugadores] = useState([])
  const [equipos, setEquipos] = useState([])
  const [deportes, setDeportes] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/jugadores/${idJugador}`)
      .then((response) => response.json())
      .then((data) => {
        setJugador(data)
        setCargando(false)
      })
      .catch(() => setCargando(false))

    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => setJugadores(Array.isArray(data) ? data : []))
      .catch(() => setJugadores([]))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : []))
      .catch(() => setDeportes([]))
  }, [idJugador])

  const volver = () => {
    router.push(`/home/jugadores?${params}`)
  }

  const verEquipo = (idEquipo) => {
    router.push(`/home/equipos/${idEquipo}?${params}`)
  }

  if (cargando) {
    return <div className={styles.contenedor}>Cargando...</div>
  }

  if (!jugador) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.volver}>
          <Button onClick={volver}>← Volver a jugadores</Button>
        </div>
        <h1 className={styles.titulo}>Jugador no encontrado</h1>
      </div>
    )
  }

  const equipo = equipos.find((e) => e.id_equipo === jugador.id_equipo)
  const deporte = equipo ? deportes.find((d) => d.id_deporte === equipo.id_deporte) : null
  const edad = calcularEdad(jugador.fecha_nacimiento)
  const nombreCompleto = `${jugador.nombre} ${jugador.apellido}`

  const companeros = jugadores
    .filter((j) => j.id_equipo === jugador.id_equipo && j.id_jugadores !== jugador.id_jugadores)
    .sort((a, b) => Number(a.posicion) - Number(b.posicion))

  return (
    <div className={styles.contenedor}>
      <div className={styles.volver}>
        <Button onClick={volver}>← Volver a jugadores</Button>
      </div>

      <div className={styles.encabezado}>
        <Escudo imagen={jugador.imagen_url} nombre={nombreCompleto} tamaño={"grande"} redondo={true} />
        <div>
          <span className={styles.etiqueta}>
            JUGADOR / {deporte ? deporte.nombre : "Sin deporte"} · N° {jugador.posicion}
          </span>
          <h1 className={styles.titulo}>{nombreCompleto}</h1>
          {equipo && (
            <p className={styles.descripcion}>
              Juega en{" "}
              <button className={styles.enlace} onClick={() => verEquipo(equipo.id_equipo)}>
                {equipo.nombre}
              </button>
            </p>
          )}
        </div>
      </div>

      <div className={styles.datos}>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Equipo</span>
          <span className={styles.datoValor}>{equipo ? equipo.nombre : "Sin equipo"}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Número</span>
          <span className={styles.datoValor}>{jugador.posicion}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Nacionalidad</span>
          <span className={styles.datoValor}>{jugador.nacionalidad}</span>
        </div>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Nacimiento</span>
          <span className={styles.datoValor}>
            {formatearFecha(jugador.fecha_nacimiento)}
            {edad !== null && ` (${edad})`}
          </span>
        </div>
      </div>

      {equipo && (
        <>
          <h2 className={styles.seccionTitulo}>Compañeros en {equipo.nombre}</h2>
          {companeros.length === 0 ? (
            <div className={styles.vacio}>No hay otros jugadores cargados en este equipo.</div>
          ) : (
            <div className={styles.grilla}>
              {companeros.map((companero) => (
                <CardJugador
                  key={companero.id_jugadores}
                  nombre={companero.nombre}
                  apellido={companero.apellido}
                  imagen={companero.imagen_url}
                  posicion={companero.posicion}
                  deporte={deporte ? deporte.nombre : "Sin deporte"}
                  equipo={equipo.nombre}
                  onClick={() => router.push(`/home/jugadores/${companero.id_jugadores}?${params}`)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
