"use client"

import Escudo from "@/components/Escudo"
import { decodificarResultado } from "@/utils/resultado"
import { convertirFecha, formatearHora, hoySinHora } from "@/utils/fechas"
import styles from "./FilaPartido.module.css"

// Una fila con un partido: fecha · local · marcador · visitante · estado
// local y visitante son los objetos del equipo (o undefined si no se encontró)
export default function FilaPartido({ partido, local, visitante, onClick }) {
  const { local: golesLocal, visitante: golesVisitante } = decodificarResultado(partido.resultado)

  const fecha = convertirFecha(partido.fecha)
  const hoy = hoySinHora()

  let estado = "Finalizado"
  let claseEstado = styles.estado
  if (!fecha) {
    estado = "Sin fecha"
  } else if (fecha > hoy) {
    estado = "Próximo"
    claseEstado = styles.estadoProximo
  } else if (fecha.getTime() === hoy.getTime()) {
    estado = "Hoy"
    claseEstado = styles.estadoHoy
  }

  const dia = fecha ? fecha.getDate() : "--"
  const mes = fecha ? fecha.toLocaleDateString("es-AR", { month: "short" }).replace(".", "") : "s/f"

  const nombreLocal = local ? local.nombre : "A definir"
  const nombreVisitante = visitante ? visitante.nombre : "A definir"

  return (
    <button className={styles.fila} onClick={onClick}>
      <div className={styles.calendario}>
        <span className={styles.dia}>{dia}</span>
        <span className={styles.mes}>{mes}</span>
        <span className={styles.hora}>{formatearHora(partido.hora)}</span>
      </div>

      <div className={styles.equipoLocal}>
        <span className={styles.nombre}>{nombreLocal}</span>
        <Escudo imagen={local && local.logo_url} nombre={nombreLocal} tamaño={"chico"} />
      </div>

      <div className={styles.marcador}>
        {estado === "Próximo" ? (
          <span className={styles.vs}>VS</span>
        ) : (
          <span className={styles.goles}>
            {golesLocal} - {golesVisitante}
          </span>
        )}
      </div>

      <div className={styles.equipoVisitante}>
        <Escudo imagen={visitante && visitante.logo_url} nombre={nombreVisitante} tamaño={"chico"} />
        <span className={styles.nombre}>{nombreVisitante}</span>
      </div>

      <div className={styles.derecha}>
        <span className={claseEstado}>{estado}</span>
        <span className={styles.lugar}>{partido.lugar}</span>
      </div>
    </button>
  )
}
