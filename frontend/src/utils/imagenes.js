// Dirección del backend (donde quedan las imágenes subidas)
export const BACKEND = "http://localhost:4000"

// Convierte lo guardado en la base en una dirección que el navegador pueda mostrar:
//  - "/uploads/..."  → imagen subida al backend      → http://localhost:4000/uploads/...
//  - "/imagenes/..." → imagen en frontend/public     → se usa tal cual
//  - "https://..."   → imagen de internet            → se usa tal cual
export const urlImagen = (valor) => {
  if (!valor) {
    return null
  }
  if (valor.startsWith("/uploads/")) {
    return `${BACKEND}${valor}`
  }
  return valor
}

// "Boca Juniors" → "BJ"
export const iniciales = (texto) => {
  return String(texto || "")
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
