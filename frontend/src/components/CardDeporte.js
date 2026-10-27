"use client"

import styles from "./CardDeporte.module.css"

export default function CardDeporte({ nombre, descripcion, cantidadEquipos, onClick }) {
  return (
    <div className={styles.card}>
      <span className={styles.etiqueta}>DEPORTES · PIOZONE</span>
      <h3 className={styles.titulo}>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.equipos}>{cantidadEquipos} equipos</p>
      <button className={styles.abrir} onClick={onClick}>Ver detalle →</button>
    </div>
  )
}