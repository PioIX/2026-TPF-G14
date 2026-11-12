"use client"

// variante: "primario" | "secundario" | "fantasma" | "peligro"
export default function Button({ type = "button", children, onClick, variante = "primario", className = "", ...resto }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`boton boton${variante.charAt(0).toUpperCase()}${variante.slice(1)} ${className}`.trim()}
      {...resto}
    >
      {children}
    </button>
  )
}
