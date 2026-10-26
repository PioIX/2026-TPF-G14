"use client"

import styles from "./Card.module.css"

export default function Card({ titulo, cantidad, onClick }) {
  return (
    <div className={styles.card}>
      <span className={styles.etiqueta}>EXPLORAR</span>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.cantidad}>{cantidad} registros</p>
      <button className={styles.abrir} onClick={onClick}>Abrir sección →</button>
    </div>
  )
}