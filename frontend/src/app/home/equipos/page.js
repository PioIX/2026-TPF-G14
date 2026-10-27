"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import CardEquipo from "@/components/CardEquipo"
import styles from "./page.module.css"

export default function EquiposPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const rol = searchParams.get("rol")

  const params = `id=${id}&nombre=${nombre}&rol=${rol}`

  const [equipos, setEquipos] = useState([])
  const [deportes, setDeportes] = useState([])
  const [competencias, setCompetencias] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [filtroDeporte, setFiltroDeporte] = useState("todos")
  const [orden, setOrden] = useState("az")

  useEffect(() => {
    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(data))

    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(data))

    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => setCompetencias(data))
  }, [])

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value)
  }

  const onChangeDeporte = (event) => {
    setFiltroDeporte(event.target.value)
  }

  const onChangeOrden = (event) => {
    setOrden(event.target.value)
  }

  const limpiarFiltros = () => {
    setBusqueda("")
    setFiltroDeporte("todos")
    setOrden("az")
  }

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const nombreCompetencia = (idCompetencia) => {
    const competencia = competencias.find((c) => c.id_competencia === idCompetencia)
    return competencia ? competencia.nombre : "Sin competencia"
  }

  const verDetalle = (idEquipo) => {
    router.push(`/home/equipos/${idEquipo}?${params}`)
  }

  const texto = busqueda.toLowerCase()

  const equiposFiltrados = equipos.filter((equipo) => {
    const coincideTexto =
      equipo.nombre.toLowerCase().includes(texto) ||
      nombreDeporte(equipo.id_deporte).toLowerCase().includes(texto) ||
      nombreCompetencia(equipo.id_competencia).toLowerCase().includes(texto)

    const coincideDeporte =
      filtroDeporte === "todos" || String(equipo.id_deporte) === filtroDeporte

    return coincideTexto && coincideDeporte
  })

  const equiposOrdenados = [...equiposFiltrados].sort((a, b) => {
    if (orden === "az") {
      return a.nombre.localeCompare(b.nombre)
    }
    if (orden === "za") {
      return b.nombre.localeCompare(a.nombre)
    }
    return nombreDeporte(a.id_deporte).localeCompare(nombreDeporte(b.id_deporte))
  })

  const hayFiltros = busqueda !== "" || filtroDeporte !== "todos"

  return (
    <div className={styles.contenedor}>
      <span className={styles.etiqueta}>EXPLORAR / PIOZONE</span>
      <h1 className={styles.titulo}>Equipos</h1>
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
            <label className={styles.labelCampo}>Ordenar por</label>
            <select className={styles.select} value={orden} onChange={onChangeOrden}>
              <option value="az">Nombre A–Z</option>
              <option value="za">Nombre Z–A</option>
              <option value="deporte">Deporte</option>
            </select>
          </div>
        </div>

        <div className={styles.limpiar}>
          <Button onClick={limpiarFiltros}>Limpiar filtros</Button>
        </div>
      </div>

      <div className={styles.barraResultados}>
        <p className={styles.resultados}>{equiposOrdenados.length} {equiposOrdenados.length === 1 ? "resultado" : "resultados"}
        </p>

        {hayFiltros && (
          <div className={styles.chips}>
            {busqueda !== "" && <span className={styles.chip}>“{busqueda}”</span>}
            {filtroDeporte !== "todos" && (
              <span className={styles.chip}>{nombreDeporte(Number(filtroDeporte))}</span>
            )}
          </div>
        )}
      </div>

      {equiposOrdenados.length === 0 ? (
        <div className={styles.vacio}>No se encontraron equipos con ese criterio.</div>
      ) : (
        <div className={styles.grilla}>
          {equiposOrdenados.map((equipo) => (
            <CardEquipo
              key={equipo.id_equipo}
              nombre={equipo.nombre}
              deporte={nombreDeporte(equipo.id_deporte)}
              competencia={nombreCompetencia(equipo.id_competencia)}
              onClick={() => verDetalle(equipo.id_equipo)}
            />
          ))}
        </div>
      )}

      <div className={styles.guia}>
        <h3 className={styles.guiaTitulo}>Guía rápida</h3>
        <p className={styles.guiaTexto}>
          Usá la navegación o las fichas para abrir secciones y detalles. Buscá por nombre, deporte o competencia, filtrá por deporte y seguí las relaciones entre equipos, jugadores y competencias.
        </p>
      </div>
    </div>
  )
}
