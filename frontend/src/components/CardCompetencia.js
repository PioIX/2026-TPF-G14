"use client"

import styles from "./CardCompetencia.module.css"

export default function CardCompetencia({ tipo, nombre, deporte, fecha, estado, proximo, onClick }) {
  const dia = fecha ? fecha.getDate() : "--"
  const mes = fecha ? fecha.toLocaleDateString("es-AR", { month: "short" }).replace(".", "") : "s/f"

  const fechaTexto = fecha
    ? fecha.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })
    : "Sin fecha"

  return (
    <div className={styles.card}>
      <div className={styles.cabecera}>
        <span className={styles.etiqueta}>{tipo.toUpperCase()} · PIOZONE</span>
        <div className={styles.calendario}>
          <span className={styles.dia}>{dia}</span>
          <span className={styles.mes}>{mes}</span>
        </div>
      </div>
      <h3 className={styles.titulo}>{nombre}</h3>
      <p className={styles.relacion}>
        {deporte} · {fechaTexto}
      </p>
      <span className={proximo ? styles.estadoProximo : styles.estado}>{estado}</span>
      <button className={styles.abrir} onClick={onClick}>Ver detalle →</button>
    </div>
  )
}
