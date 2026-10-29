"use client"

import Escudo from "@/components/Escudo"
import styles from "./CardJugador.module.css"

export default function CardJugador({ nombre, apellido, imagen, posicion, deporte, equipo, onClick }) {

  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <span className={styles.etiqueta}>JUGADORES · PIOZONE</span>
        <Escudo imagen={imagen} nombre={`${nombre} ${apellido}`} tamaño={"mediano"} redondo={true} />
      </div>
      <h3 className={styles.titulo}>
        {nombre} {apellido}
      </h3>
      <p className={styles.relacion}>
        {deporte} · {equipo}
      </p>
      {posicion !== null && posicion !== undefined && <span className={styles.posicion}>N° {posicion}</span>}
      <button className={styles.abrir} onClick={onClick}>Ver detalle →</button>
    </div>
  )
}
