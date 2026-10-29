"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import CardDeporte from "@/components/CardDeporte"
import CardEquipo from "@/components/CardEquipo"
import CardJugador from "@/components/CardJugador"
import CardCompetencia from "@/components/CardCompetencia"
import { convertirFecha } from "@/utils/fechas"
import styles from "../detalle.module.css"

export default function BuscarPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const q = searchParams.get("q") || ""
  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [deportes, setDeportes] = useState([])
  const [equipos, setEquipos] = useState([])
  const [jugadores, setJugadores] = useState([])
  const [competencias, setCompetencias] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : []))
      .catch(() => setDeportes([]))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => setJugadores(Array.isArray(data) ? data : []))
      .catch(() => setJugadores([]))

    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => setCompetencias(Array.isArray(data) ? data : []))
      .catch(() => setCompetencias([]))
  }, [])

  const texto = q.toLowerCase()

  const coincide = (valor) => String(valor || "").toLowerCase().includes(texto)

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const buscarEquipo = (idEquipo) => {
    return equipos.find((equipo) => equipo.id_equipo === idEquipo)
  }

  const deportesEncontrados = deportes.filter((d) => coincide(d.nombre) || coincide(d.descrpcion))
  const equiposEncontrados = equipos.filter((e) => coincide(e.nombre) || coincide(e.descripcion))
  const jugadoresEncontrados = jugadores.filter(
    (j) => coincide(`${j.nombre} ${j.apellido}`) || coincide(j.nacionalidad)
  )
  const competenciasEncontradas = competencias.filter((c) => coincide(c.nombre) || coincide(c.descrpcion))

  const total =
    deportesEncontrados.length +
    equiposEncontrados.length +
    jugadoresEncontrados.length +
    competenciasEncontradas.length

  const ir = (ruta) => {
    router.push(`${ruta}?${params}`)
  }

  return (
    <div className={styles.contenedor}>
      <span className={styles.etiqueta}>BUSCAR / PIOZONE</span>
      <h1 className={styles.titulo}>“{q}”</h1>
      <p className={styles.descripcion}>
        {total} {total === 1 ? "resultado" : "resultados"} en deportes, equipos, jugadores y competencias.
      </p>

      {total === 0 && (
        <>
          <h2 className={styles.seccionTitulo}>Sin resultados</h2>
          <div className={styles.vacio}>No encontramos nada con ese texto. Probá con otra palabra.</div>
        </>
      )}

      {deportesEncontrados.length > 0 && (
        <>
          <h2 className={styles.seccionTitulo}>Deportes</h2>
          <div className={styles.grilla}>
            {deportesEncontrados.map((deporte) => (
              <CardDeporte
                key={deporte.id_deporte}
                nombre={deporte.nombre}
                descripcion={deporte.descrpcion}
                cantidadEquipos={equipos.filter((e) => e.id_deporte === deporte.id_deporte).length}
                onClick={() => ir(`/home/deportes/${deporte.id_deporte}`)}
              />
            ))}
          </div>
        </>
      )}

      {equiposEncontrados.length > 0 && (
        <>
          <h2 className={styles.seccionTitulo}>Equipos</h2>
          <div className={styles.grilla}>
            {equiposEncontrados.map((equipo) => (
              <CardEquipo
                key={equipo.id_equipo}
                nombre={equipo.nombre}
                logo={equipo.logo_url}
                deporte={nombreDeporte(equipo.id_deporte)}
                competencia={equipo.descripcion}
                onClick={() => ir(`/home/equipos/${equipo.id_equipo}`)}
              />
            ))}
          </div>
        </>
      )}

      {jugadoresEncontrados.length > 0 && (
        <>
          <h2 className={styles.seccionTitulo}>Jugadores</h2>
          <div className={styles.grilla}>
            {jugadoresEncontrados.map((jugador) => {
              const equipo = buscarEquipo(jugador.id_equipo)
              return (
                <CardJugador
                  key={jugador.id_jugadores}
                  nombre={jugador.nombre}
                  apellido={jugador.apellido}
                  imagen={jugador.imagen_url}
                  posicion={jugador.posicion}
                  deporte={equipo ? nombreDeporte(equipo.id_deporte) : "Sin deporte"}
                  equipo={equipo ? equipo.nombre : "Sin equipo"}
                  onClick={() => ir(`/home/jugadores/${jugador.id_jugadores}`)}
                />
              )
            })}
          </div>
        </>
      )}

      {competenciasEncontradas.length > 0 && (
        <>
          <h2 className={styles.seccionTitulo}>Competencias</h2>
          <div className={styles.grilla}>
            {competenciasEncontradas.map((competencia) => (
              <CardCompetencia
                key={competencia.id_competencia}
                tipo={"Competencia"}
                nombre={competencia.nombre}
                deporte={nombreDeporte(competencia.id_deporte)}
                fecha={convertirFecha(competencia.fecha_inicio)}
                estado={competencia.descrpcion}
                proximo={false}
                onClick={() => ir(`/home/competencias/${competencia.id_competencia}`)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
