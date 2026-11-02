// El resultado de un partido se guarda en UN solo INT de la base:
//   resultado = goles_local * 1000 + goles_visitante
// Ejemplo: 3 a 1  →  3 * 1000 + 1 = 3001
// Por eso cada equipo puede tener como máximo 999 goles/puntos.

export const MAX_GOLES = 999

export const codificarResultado = (local, visitante) => {
  return Number(local) * 1000 + Number(visitante)
}

export const decodificarResultado = (resultado) => {
  const numero = Number(resultado) || 0
  return {
    local: Math.floor(numero / 1000),
    visitante: numero % 1000,
  }
}

// Devuelve un texto de error, o null si los valores sirven
export const validarGoles = (local, visitante) => {
  if (String(local).trim() === "" || String(visitante).trim() === "") {
    return "Completá los goles de los dos equipos."
  }
  const valores = [Number(local), Number(visitante)]
  const invalido = valores.some((v) => !Number.isInteger(v) || v < 0 || v > MAX_GOLES)
  if (invalido) {
    return `Los goles tienen que ser números enteros entre 0 y ${MAX_GOLES}.`
  }
  return null
}
