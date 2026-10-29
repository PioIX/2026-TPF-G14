"use client"

import { useState } from "react"
import { urlImagen, iniciales } from "@/utils/imagenes"
import styles from "./Escudo.module.css"

// Muestra el logo de un equipo (o la foto de un jugador).
// Si no hay imagen o no carga, muestra las iniciales.
// tamaño: "chico" | "mediano" | "grande"   ·   redondo: para fotos de jugadores
export default function Escudo({ imagen, nombre, tamaño = "mediano", redondo = false }) {
  // Guarda la ruta que falló: si la imagen cambia, se vuelve a intentar
  const [imagenRota, setImagenRota] = useState(null)

  const url = urlImagen(imagen)
  const clases = `${styles.escudo} ${styles[tamaño]} ${redondo ? styles.redondo : ""}`

  if (url && url !== imagenRota) {
    return (
      <span className={`${clases} ${styles.conImagen}`}>
        <img src={url} alt={nombre || ""} onError={() => setImagenRota(url)} />
      </span>
    )
  }

  return <span className={clases}>{iniciales(nombre)}</span>
}
