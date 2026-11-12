"use client"

import { useState } from "react"
import styles from "./FilaRegistro.module.css"

export default function FilaRegistro({ titulo, detalle, imagen, editando, onEditar, onEliminar }) {
  const [confirmando, setConfirmando] = useState(false)
  // Guarda la ruta que falló: si la imagen cambia, se vuelve a intentar
  const [imagenRota, setImagenRota] = useState(null)

  const confirmarEliminar = () => {
    setConfirmando(false)
    onEliminar()
  }

  return (
    <div className={editando ? styles.filaEditando : styles.fila}>
      <div className={styles.izquierda}>
        {imagen && imagen !== imagenRota ? (
          <img src={imagen} alt="" className={styles.miniatura} onError={() => setImagenRota(imagen)} />
        ) : (
          <span className={styles.miniaturaVacia} aria-hidden="true">
            {String(titulo || "?").charAt(0).toUpperCase()}
          </span>
        )}
        <div className={styles.datos}>
          <span className={styles.titulo}>{titulo}</span>
          <span className={styles.detalle}>{detalle}</span>
        </div>
      </div>

      {confirmando ? (
        <div className={styles.acciones}>
          <span className={styles.pregunta}>¿Eliminar?</span>
          <button type="button" className={styles.peligro} onClick={confirmarEliminar}>
            Sí, eliminar
          </button>
          <button type="button" className={styles.secundario} onClick={() => setConfirmando(false)}>
            Cancelar
          </button>
        </div>
      ) : (
        <div className={styles.acciones}>
          <button type="button" className={styles.primario} onClick={onEditar}>
            Editar
          </button>
          <button type="button" className={styles.secundario} onClick={() => setConfirmando(true)}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  )
}
