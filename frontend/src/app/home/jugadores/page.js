"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import CardJugador from "@/components/CardJugador"
import styles from "./page.module.css"

export default function JugadoresPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [jugadores, setJugadores] = useState([])
  const [equipos, setEquipos] = useState([])
  const [deportes, setDeportes] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [filtroDeporte, setFiltroDeporte] = useState("todos")
  const [filtroEquipo, setFiltroEquipo] = useState("todos")
  const [orden, setOrden] = useState("az")

  useEffect(() => {
    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => setJugadores(Array.isArray(data) ? data : []))
      .catch(() => setJugadores([]))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : []))
      .catch(() => setDeportes([]))
  }, [])

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value)
  }

  const onChangeDeporte = (event) => {
    setFiltroDeporte(event.target.value)
    setFiltroEquipo("todos")
  }

  const onChangeEquipo = (event) => {
    setFiltroEquipo(event.target.value)
  }

  const onChangeOrden = (event) => {
    setOrden(event.target.value)
  }

  const limpiarFiltros = () => {
    setBusqueda("")
    setFiltroDeporte("todos")
    setFiltroEquipo("todos")
    setOrden("az")
  }

  const buscarEquipo = (idEquipo) => {
    return equipos.find((equipo) => equipo.id_equipo === idEquipo)
  }

  const nombreEquipo = (idEquipo) => {
    const equipo = buscarEquipo(idEquipo)
    return equipo ? equipo.nombre : "Sin equipo"
  }

  // El deporte se toma del jugador si lo tiene, o si no del equipo al que pertenece
  const idDeporteJugador = (jugador) => {
    if (jugador.id_deporte) {
      return jugador.id_deporte
    }
    const equipo = buscarEquipo(jugador.id_equipo)
    return equipo ? equipo.id_deporte : null
  }

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const nombreCompleto = (jugador) => {
    return `${jugador.nombre} ${jugador.apellido}`
  }

  const verDetalle = (idJugador) => {
    router.push(`/home/jugadores/${idJugador}?${params}`)
  }

  // Si hay un deporte elegido, el select de equipos solo muestra los de ese deporte
  const equiposDisponibles = equipos.filter(
    (equipo) => filtroDeporte === "todos" || String(equipo.id_deporte) === filtroDeporte
  )

  const texto = busqueda.toLowerCase()

  const jugadoresFiltrados = jugadores.filter((jugador) => {
    const coincideTexto =
      nombreCompleto(jugador).toLowerCase().includes(texto) ||
      nombreEquipo(jugador.id_equipo).toLowerCase().includes(texto) ||
      nombreDeporte(idDeporteJugador(jugador)).toLowerCase().includes(texto) ||
      String(jugador.posicion || "").toLowerCase().includes(texto)

    const coincideDeporte =
      filtroDeporte === "todos" || String(idDeporteJugador(jugador)) === filtroDeporte

    const coincideEquipo =
      filtroEquipo === "todos" ||
      (filtroEquipo === "sin" && !buscarEquipo(jugador.id_equipo)) ||
      String(jugador.id_equipo) === filtroEquipo

    return coincideTexto && coincideDeporte && coincideEquipo
  })

  const jugadoresOrdenados = [...jugadoresFiltrados].sort((a, b) => {
    if (orden === "az") {
      return nombreCompleto(a).localeCompare(nombreCompleto(b))
    }
    if (orden === "za") {
      return nombreCompleto(b).localeCompare(nombreCompleto(a))
    }
    if (orden === "apellido") {
      return a.apellido.localeCompare(b.apellido)
    }
    return nombreEquipo(a.id_equipo).localeCompare(nombreEquipo(b.id_equipo))
  })

  const hayFiltros = busqueda !== "" || filtroDeporte !== "todos" || filtroEquipo !== "todos"

  return (
    <div className={styles.contenedor}>
      <span className={styles.etiqueta}>EXPLORAR / PIOZONE</span>
      <h1 className={styles.titulo}>Jugadores</h1>
      <p className={styles.descripcion}>
        Elegí una ficha para consultar su detalle y sus relaciones.
      </p>

      <div className={styles.filtros}>
        <h2 className={styles.filtrosTitulo}>Filtrar y ordenar</h2>

        <div className={styles.campos}>
          <div className={styles.campo}>
            <label className={styles.labelCampo}>Buscar en esta sección</label>
            <Input onChange={onChangeBusqueda} placeholder={"Nombre o referencia"} value={busqueda} type={"text"} />
          </div>

          <div className={styles.campo}>
            <label className={styles.labelCampo}>Deporte</label>
            <select className={styles.select} value={filtroDeporte} onChange={onChangeDeporte}>
              <option value="todos">Todos</option>
              {deportes.map((deporte) => (
                <option key={deporte.id_deporte} value={String(deporte.id_deporte)}>
                  {deporte.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.campo}>
            <label className={styles.labelCampo}>Equipo</label>
            <select className={styles.select} value={filtroEquipo} onChange={onChangeEquipo}>
              <option value="todos">Todos</option>
              {equiposDisponibles.map((equipo) => (
                <option key={equipo.id_equipo} value={String(equipo.id_equipo)}>
                  {equipo.nombre}
                </option>
              ))}
              <option value="sin">Sin equipo</option>
            </select>
          </div>

          <div className={styles.campo}>
            <label className={styles.labelCampo}>Ordenar por</label>
            <select className={styles.select} value={orden} onChange={onChangeOrden}>
              <option value="az">Nombre A–Z</option>
              <option value="za">Nombre Z–A</option>
              <option value="apellido">Apellido</option>
              <option value="equipo">Equipo</option>
            </select>
          </div>
        </div>

        <div className={styles.limpiar}>
          <Button onClick={limpiarFiltros}>Limpiar filtros</Button>
        </div>
      </div>

      <div className={styles.barraResultados}>
        <p className={styles.resultados}>{jugadoresOrdenados.length} {jugadoresOrdenados.length === 1 ? "resultado" : "resultados"}
        </p>

        {hayFiltros && (
          <div className={styles.chips}>
            {busqueda !== "" && <span className={styles.chip}>“{busqueda}”</span>}
            {filtroDeporte !== "todos" && (
              <span className={styles.chip}>{nombreDeporte(Number(filtroDeporte))}</span>
            )}
            {filtroEquipo !== "todos" && (
              <span className={styles.chip}>
                {filtroEquipo === "sin" ? "Sin equipo" : nombreEquipo(Number(filtroEquipo))}
              </span>
            )}
          </div>
        )}
      </div>

      {jugadoresOrdenados.length === 0 ? (
        <div className={styles.vacio}>No se encontraron jugadores con ese criterio.</div>
      ) : (
        <div className={styles.grilla}>
          {jugadoresOrdenados.map((jugador) => (
            <CardJugador
              key={jugador.id_jugadores}
              nombre={jugador.nombre}
              apellido={jugador.apellido}
              imagen={jugador.imagen_url}
              posicion={jugador.posicion}
              deporte={nombreDeporte(idDeporteJugador(jugador))}
              equipo={nombreEquipo(jugador.id_equipo)}
              onClick={() => verDetalle(jugador.id_jugadores)}
            />
          ))}
        </div>
      )}

      <div className={styles.guia}>
        <h3 className={styles.guiaTitulo}>Guía rápida</h3>
        <p className={styles.guiaTexto}>
          Usá la navegación o las fichas para abrir secciones y detalles. Buscá por nombre, equipo, deporte o posición, combiná los filtros y seguí las relaciones entre jugadores, equipos y competencias.
        </p>
      </div>
    </div>
  )
}
