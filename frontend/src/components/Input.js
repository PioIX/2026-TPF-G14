"use client"

// Input base de la aplicación. Los estilos vienen de globals.css (.input),
// así todos los formularios se ven iguales.
export default function Input({ placeholder, onChange, value, type, className = "", ...resto }) {
  return (
    <input
      className={`input ${className}`.trim()}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      {...resto}
    />
  )
}
