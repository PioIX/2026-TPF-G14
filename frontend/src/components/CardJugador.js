"use client"

import Escudo from "@/components/Escudo"
import styles from "./CardJugador.module.css"

export default function CardJugador({ nombre, apellido, imagen, posicion, deporte, equipo, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <Escudo imagen={imagen} nombre={`${nombre} ${apellido}`} tamaño={"mediano"} redondo={true} />
        <div className={styles.cabeceraDatos}>
          <span className={styles.etiqueta}>Jugador</span>
          {posicion !== null && posicion !== undefined && <span className={styles.posicion}>N° {posicion}</span>}
        </div>
      </div>
      <h3 className={styles.titulo}>
        {nombre} {apellido}
      </h3>
      <p className={styles.relacion}>
        <span className={styles.deporte}>{deporte}</span>
        <span className={styles.separador}>·</span>
        {equipo}
      </p>
      <button className={styles.abrir} onClick={onClick}>
        Ver detalle <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
