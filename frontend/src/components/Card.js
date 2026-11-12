"use client"

import styles from "./Card.module.css"

export default function Card({ titulo, cantidad, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <span className={styles.etiqueta}>Explorar</span>
        <span className={styles.cantidad}>{cantidad}</span>
      </div>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.detalle}>{cantidad === 1 ? "registro disponible" : "registros disponibles"}</p>
      <button className={styles.abrir} onClick={onClick}>
        Abrir sección <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
