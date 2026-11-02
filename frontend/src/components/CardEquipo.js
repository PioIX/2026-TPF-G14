"use client"

import Escudo from "@/components/Escudo"
import styles from "./CardEquipo.module.css"

export default function CardEquipo({ nombre, logo, deporte, competencia, cantidadJugadores, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <span className={styles.etiqueta}>EQUIPOS · PIOZONE</span>
      </div>
      <div className={styles.logo}>
        <Escudo imagen={logo} nombre={nombre} tamaño={"grande"} />
      </div>
      <h3 className={styles.titulo}>{nombre}</h3>
      <p className={styles.relacion}>
        {deporte} · {competencia}
      </p>
      {cantidadJugadores !== undefined && (
        <span className={styles.jugadores}>
          {cantidadJugadores} {cantidadJugadores === 1 ? "jugador" : "jugadores"}
        </span>
      )}
      <button className={styles.abrir} onClick={onClick}>Ver detalle →</button>
    </div>
  )
}
