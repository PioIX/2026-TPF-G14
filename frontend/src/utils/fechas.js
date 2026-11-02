// MySQL devuelve las fechas como "2027-03-12T03:00:00.000Z" (o "2027-03-12").
// Esta función la convierte en un Date a la medianoche local (o null si no hay).
export const convertirFecha = (valor) => {
  if (!valor) {
    return null
  }
  const texto = String(valor)
  let fecha
  if (texto.length === 10) {
    fecha = new Date(`${texto}T00:00:00`)
  } else {
    fecha = new Date(texto)
  }
  if (isNaN(fecha.getTime())) {
    return null
  }
  fecha.setHours(0, 0, 0, 0)
  return fecha
}

export const formatearFecha = (valor) => {
  const fecha = convertirFecha(valor)
  return fecha ? fecha.toLocaleDateString("es-AR") : "Sin fecha"
}

// "18:30:00" → "18:30"
export const formatearHora = (valor) => {
  return valor ? String(valor).slice(0, 5) : "--:--"
}

// Calcula la edad a partir de la fecha de nacimiento
export const calcularEdad = (valor) => {
  const nacimiento = convertirFecha(valor)
  if (!nacimiento) {
    return null
  }
  const hoy = new Date()
  let edad = hoy.getFullYear() - nacimiento.getFullYear()
  const todaviaNoCumplio =
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
  if (todaviaNoCumplio) {
    edad = edad - 1
  }
  return edad
}

export const hoySinHora = () => {
  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)
  return hoy
}
