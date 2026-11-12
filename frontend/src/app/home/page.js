"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Card from "@/components/Card"
import styles from "./page.module.css"

export default function HomePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

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
      .then((data) => setDeportes(data))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(data))

    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => setJugadores(data))

    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => setCompetencias(data))
  }, [])

  const accesos = [
    { id: 1, titulo: "Deportes", cantidad: deportes.length, ruta: "/home/deportes" },
    { id: 2, titulo: "Equipos", cantidad: equipos.length, ruta: "/home/equipos" },
    { id: 3, titulo: "Jugadores", cantidad: jugadores.length, ruta: "/home/jugadores" },
    { id: 4, titulo: "Competencias y eventos", cantidad: competencias.length, ruta: "/home/competencias" },
  ]

  const irASeccion = (ruta) => {
    router.push(`${ruta}?${params}`)
  }

  return (
    <div className={styles.contenedor}>
      <section className={styles.hero}>
        <div className={styles.heroTexto}>
          <span className={styles.etiqueta}>PIOZONE / HOLA, {nombre}</span>
          <h1 className={styles.titulo}>Todo el deporte, en un solo lugar</h1>
          <p className={styles.descripcion}>
            Explorá deportes, equipos, jugadores y competencias en una única aplicación.
          </p>

          <div className={styles.acciones}>
            <button className={styles.accionPrimaria} onClick={() => irASeccion("/home/competencias")}>
              Ver competencias <span aria-hidden="true">→</span>
            </button>
            <button className={styles.accionSecundaria} onClick={() => irASeccion("/home/equipos")}>
              Explorar equipos
            </button>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <span className={styles.heroPanelEtiqueta}>Resumen</span>
          <div className={styles.metricas}>
            <div className={styles.metrica}>
              <span className={styles.metricaNumero}>{deportes.length}</span>
              <span className={styles.metricaTexto}>Deportes</span>
            </div>
            <div className={styles.metrica}>
              <span className={styles.metricaNumero}>{equipos.length}</span>
              <span className={styles.metricaTexto}>Equipos</span>
            </div>
            <div className={styles.metrica}>
              <span className={styles.metricaNumero}>{jugadores.length}</span>
              <span className={styles.metricaTexto}>Jugadores</span>
            </div>
            <div className={styles.metrica}>
              <span className={styles.metricaNumero}>{competencias.length}</span>
              <span className={styles.metricaTexto}>Competencias</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.accesosCabecera}>
        <h2 className={styles.accesosTitulo}>Accesos rápidos</h2>
        <p className={styles.accesosTexto}>Elegí una categoría o utilizá el buscador del encabezado.</p>
      </div>

      <div className={styles.accesos}>
        {accesos.map((acceso) => (
          <Card
            key={acceso.id}
            titulo={acceso.titulo}
            cantidad={acceso.cantidad}
            onClick={() => irASeccion(acceso.ruta)}
          />
        ))}
      </div>

      <div className={styles.guia}>
        <h3 className={styles.guiaTitulo}>Guía rápida</h3>
        <p className={styles.guiaTexto}>
          Usá la navegación o las tarjetas para abrir secciones y detalles. Buscá desde arriba y seguí las relaciones entre equipos, jugadores y competencias.
        </p>
      </div>
    </div>
  )
}
