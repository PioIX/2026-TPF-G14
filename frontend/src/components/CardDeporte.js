"use client"

import styles from "./CardDeporte.module.css"

export default function CardDeporte({ nombre, descripcion, cantidadEquipos, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <span className={styles.etiqueta}>Deporte</span>
        <span className={styles.equipos}>
          {cantidadEquipos} {cantidadEquipos === 1 ? "equipo" : "equipos"}
        </span>
      </div>
      <h3 className={styles.titulo}>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <button className={styles.abrir} onClick={onClick}>
        Ver detalle <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
