"use client"

import styles from "./CardGestion.module.css"
//este componente es la tarjeta de arriba osea equipos partridos competencias jugadores etc
export default function CardGestion({ titulo, cantidad, activa, onClick }) {
  return (
    <button className={activa ? styles.cardActiva : styles.card} onClick={onClick}>
      <span className={styles.etiqueta}>GESTIONAR</span>
      <span className={styles.titulo}>{titulo}</span>
      <span className={styles.cantidad}>{cantidad} {cantidad === 1 ? "registro" : "registros"}</span>
    </button>
  )
}
