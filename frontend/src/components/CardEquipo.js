"use client"

import styles from "./CardEquipo.module.css"

export default function CardEquipo({ nombre, deporte, competencia, onClick }) {
  const iniciales = nombre
    .split(" ")
    .map((palabra) => palabra[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <span className={styles.etiqueta}>EQUIPOS · PIOZONE</span>
        <span className={styles.escudo}>{iniciales}</span>
      </div>
      <h3 className={styles.titulo}>{nombre}</h3>
      <p className={styles.relacion}>
        {deporte} · {competencia}
      </p>
      <button className={styles.abrir} onClick={onClick}>Ver detalle →</button>
    </div>
  )
}
