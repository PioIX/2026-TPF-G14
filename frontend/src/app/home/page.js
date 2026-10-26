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
  const rol = searchParams.get("rol")

  const params = `id=${id}&nombre=${nombre}&rol=${rol}`

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
      <span className={styles.etiqueta}>PIOZONE / HOLA, {nombre}</span>
      <h1 className={styles.titulo}>Todo el deporte, en un solo lugar</h1>
      <p className={styles.descripcion}>
        Explorá deportes, equipos, jugadores y competencias en una única aplicación.
      </p>

      <div className={styles.explorar}>
        <h2 className={styles.subtitulo}>¿Qué querés explorar?</h2>
        <p className={styles.texto}>Elegí una categoría o utilizá el buscador del encabezado.</p>
      </div>

      <h2 className={styles.accesosTitulo}>Accesos rápidos</h2>

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