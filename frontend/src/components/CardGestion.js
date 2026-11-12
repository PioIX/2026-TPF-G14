"use client"

import styles from "./CardGestion.module.css"

// icono: emoji o texto corto que identifica la categoría
export default function CardGestion({ titulo, cantidad, activa, icono, onClick }) {
  return (
    <button
      type="button"
      className={activa ? styles.cardActiva : styles.card}
      onClick={onClick}
      aria-pressed={activa}
    >
      <span className={styles.icono} aria-hidden="true">
        {icono}
      </span>
      <span className={styles.datos}>
        <span className={styles.titulo}>{titulo}</span>
        <span className={styles.cantidad}>
          {cantidad} {cantidad === 1 ? "registro" : "registros"}
        </span>
      </span>
      <span className={styles.flecha} aria-hidden="true">
        →
      </span>
    </button>
  )
}
