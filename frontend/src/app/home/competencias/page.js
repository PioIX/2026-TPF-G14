"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import CardCompetencia from "@/components/CardCompetencia"
import { convertirFecha, hoySinHora } from "@/utils/fechas"
import styles from "./page.module.css"

export default function CompetenciasPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [competencias, setCompetencias] = useState([])
  const [partidos, setPartidos] = useState([])
  const [deportes, setDeportes] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [filtroDeporte, setFiltroDeporte] = useState("todos")
  const [filtroEstado, setFiltroEstado] = useState("todos")
  const [orden, setOrden] = useState("fecha")

  useEffect(() => {
    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => setCompetencias(Array.isArray(data) ? data : []))
      .catch(() => setCompetencias([]))

    fetch("http://localhost:4000/partidos")
      .then((response) => response.json())
      .then((data) => setPartidos(Array.isArray(data) ? data : []))
      .catch(() => setPartidos([]))

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
  }

  const onChangeEstado = (event) => {
    setFiltroEstado(event.target.value)
  }

  const onChangeOrden = (event) => {
    setOrden(event.target.value)
  }

  const limpiarFiltros = () => {
    setBusqueda("")
    setFiltroDeporte("todos")
    setFiltroEstado("todos")
    setOrden("fecha")
  }

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const contarPartidos = (idCompetencia) => {
    return partidos.filter((partido) => partido.id_competencia === idCompetencia).length
  }

  const hoy = hoySinHora()

  // proxima: todavía no empezó · encurso: entre inicio y fin · finalizada: ya terminó
  const calcularEstado = (inicio, fin) => {
    if (!inicio) {
      return { clave: "sinfecha", texto: "Sin fecha", proximo: false }
    }
    if (inicio > hoy) {
      return { clave: "proxima", texto: "Próxima", proximo: true }
    }
    if (!fin || fin >= hoy) {
      return { clave: "encurso", texto: "En curso", proximo: true }
    }
    return { clave: "finalizada", texto: "Finalizada", proximo: false }
  }

  const items = competencias.map((competencia) => {
    const inicio = convertirFecha(competencia.fecha_inicio)
    const fin = convertirFecha(competencia.fecha_fin)
    return {
      id: competencia.id_competencia,
      nombre: competencia.nombre,
      idDeporte: competencia.id_deporte,
      fecha: inicio,
      estado: calcularEstado(inicio, fin),
      cantidadPartidos: contarPartidos(competencia.id_competencia),
    }
  })

  const verDetalle = (idCompetencia) => {
    router.push(`/home/competencias/${idCompetencia}?${params}`)
  }

  const texto = busqueda.toLowerCase()

  const itemsFiltrados = items.filter((item) => {
    const coincideTexto =
      item.nombre.toLowerCase().includes(texto) ||
      nombreDeporte(item.idDeporte).toLowerCase().includes(texto)

    const coincideDeporte =
      filtroDeporte === "todos" || String(item.idDeporte) === filtroDeporte

    const coincideEstado =
      filtroEstado === "todos" || item.estado.clave === filtroEstado

    return coincideTexto && coincideDeporte && coincideEstado
  })

  // Orden de los estados cuando se ordena por fecha
  const prioridadEstado = { encurso: 0, proxima: 1, finalizada: 2, sinfecha: 3 }

  const itemsOrdenados = [...itemsFiltrados].sort((a, b) => {
    if (orden === "az") {
      return a.nombre.localeCompare(b.nombre)
    }
    if (orden === "za") {
      return b.nombre.localeCompare(a.nombre)
    }
    // Por fecha: primero las que están en curso, después las próximas (la más
    // cercana arriba), después las finalizadas (la más reciente arriba)
    const diferencia = prioridadEstado[a.estado.clave] - prioridadEstado[b.estado.clave]
    if (diferencia !== 0) return diferencia
    if (!a.fecha || !b.fecha) return 0
    return a.estado.clave === "finalizada" ? b.fecha - a.fecha : a.fecha - b.fecha
  })

  const textosEstado = { proxima: "Próximas", encurso: "En curso", finalizada: "Finalizadas" }

  const hayFiltros = busqueda !== "" || filtroDeporte !== "todos" || filtroEstado !== "todos"

  return (
    <div className={styles.contenedor}>
      <span className={styles.etiqueta}>EXPLORAR / PIOZONE</span>
      <h1 className={styles.titulo}>Competencias</h1>
      <p className={styles.descripcion}>
        Elegí una competencia para ver todos sus partidos y seguir los resultados en vivo.
      </p>

      <div className={styles.filtros}>
        <h2 className={styles.filtrosTitulo}>Filtrar y ordenar</h2>

        <div className={styles.campos}>
          <div className={styles.campo}>
            <label className={styles.labelCampo}>Buscar en esta sección</label>
            <Input onChange={onChangeBusqueda} placeholder={"Nombre o deporte"} value={busqueda} type={"text"} />
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
            <label className={styles.labelCampo}>Estado</label>
            <select className={styles.select} value={filtroEstado} onChange={onChangeEstado}>
              <option value="todos">Todos</option>
              <option value="encurso">En curso</option>
              <option value="proxima">Próximas</option>
              <option value="finalizada">Finalizadas</option>
            </select>
          </div>

          <div className={styles.campo}>
            <label className={styles.labelCampo}>Ordenar por</label>
            <select className={styles.select} value={orden} onChange={onChangeOrden}>
              <option value="fecha">Fecha</option>
              <option value="az">Nombre A–Z</option>
              <option value="za">Nombre Z–A</option>
            </select>
          </div>
        </div>

        <div className={styles.limpiar}>
          <Button onClick={limpiarFiltros}>Limpiar filtros</Button>
        </div>
      </div>

      <div className={styles.barraResultados}>
        <p className={styles.resultados}>
          {itemsOrdenados.length} {itemsOrdenados.length === 1 ? "resultado" : "resultados"}
        </p>

        {hayFiltros && (
          <div className={styles.chips}>
            {busqueda !== "" && <span className={styles.chip}>“{busqueda}”</span>}
            {filtroDeporte !== "todos" && (
              <span className={styles.chip}>{nombreDeporte(Number(filtroDeporte))}</span>
            )}
            {filtroEstado !== "todos" && (
              <span className={styles.chip}>{textosEstado[filtroEstado]}</span>
            )}
          </div>
        )}
      </div>

      {itemsOrdenados.length === 0 ? (
        <div className={styles.vacio}>No se encontraron competencias con ese criterio.</div>
      ) : (
        <div className={styles.grilla}>
          {itemsOrdenados.map((item) => (
            <CardCompetencia
              key={item.id}
              tipo={"Competencia"}
              nombre={item.nombre}
              deporte={nombreDeporte(item.idDeporte)}
              fecha={item.fecha}
              estado={item.estado.texto}
              proximo={item.estado.proximo}
              cantidadPartidos={item.cantidadPartidos}
              onClick={() => verDetalle(item.id)}
            />
          ))}
        </div>
      )}

      <div className={styles.guia}>
        <h3 className={styles.guiaTitulo}>Guía rápida</h3>
        <p className={styles.guiaTexto}>
          Filtrá por deporte o estado y ordená por fecha para ver primero lo que se está jugando. Al abrir una competencia vas a ver todos sus partidos; entrá a uno para seguir el marcador en vivo.
        </p>
      </div>
    </div>
  )
}
