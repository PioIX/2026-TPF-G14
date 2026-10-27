"use client"

import styles from "./CardJugador.module.css"

export default function CardJugador({ nombre, apellido, posicion, deporte, equipo, onClick }) {
  const iniciales = `${nombre[0] || ""}${apellido[0] || ""}`.toUpperCase()

  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <span className={styles.etiqueta}>JUGADORES · PIOZONE</span>
        <span className={styles.avatar}>{iniciales}</span>
      </div>
      <h3 className={styles.titulo}>
        {nombre} {apellido}
      </h3>
      <p className={styles.relacion}>
        {deporte} · {equipo}
      </p>
      {posicion && <span className={styles.posicion}>{posicion}</span>}
      <button className={styles.abrir} onClick={onClick}>Ver detalle →</button>
    </div>
  )
}
