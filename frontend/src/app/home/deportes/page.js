"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import CardDeporte from "@/components/CardDeporte"
import styles from "./page.module.css"

export default function DeportesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [deportes, setDeportes] = useState([])
  const [equipos, setEquipos] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [orden, setOrden] = useState("az")

  useEffect(() => {
    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(data))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(data))
  }, [])

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value)
  }

  const onChangeOrden = (event) => {
    setOrden(event.target.value)
  }

  const limpiarFiltros = () => {
    setBusqueda("")
    setOrden("az")
  }

  const contarEquipos = (idDeporte) => {
    return equipos.filter((equipo) => equipo.id_deporte === idDeporte).length
  }

  const verDetalle = (idDeporte) => {
    router.push(`/home/deportes/${idDeporte}?${params}`)
  }

  const deportesFiltrados = deportes.filter((deporte) =>
    deporte.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const deportesOrdenados = [...deportesFiltrados].sort((a, b) => {
    if (orden === "az") {
      return a.nombre.localeCompare(b.nombre)
    }
    if (orden === "za") {
      return b.nombre.localeCompare(a.nombre)
    }
    return contarEquipos(b.id_deporte) - contarEquipos(a.id_deporte)
  })

  return (
    <div className={styles.contenedor}>
      <span className={styles.etiqueta}>EXPLORAR / PIOZONE</span>
      <h1 className={styles.titulo}>Deportes</h1>
      <p className={styles.descripcion}>
        Elegí una ficha para consultar su detalle y sus relaciones.
      </p>

      <div className={styles.filtros}>
        <h2 className={styles.filtrosTitulo}>Filtrar y ordenar</h2>

        <div className={styles.campos}>
          <div className={styles.campo}>
            <label className={styles.labelCampo}>Buscar en esta sección</label>
            <Input onChange={onChangeBusqueda} placeholder={"Nombre del deporte"} value={busqueda} type={"text"} />
          </div>

          <div className={styles.campo}>
            <label className={styles.labelCampo}>Ordenar por</label>
            <select className={styles.select} value={orden} onChange={onChangeOrden}>
              <option value="az">Nombre A–Z</option>
              <option value="za">Nombre Z–A</option>
              <option value="equipos">Más equipos</option>
            </select>
          </div>
        </div>

        <div className={styles.limpiar}>
          <Button onClick={limpiarFiltros}>Limpiar filtros</Button>
        </div>
      </div>

      <p className={styles.resultados}>{deportesOrdenados.length} resultados</p>

      {deportesOrdenados.length === 0 ? (
        <div className={styles.vacio}>No se encontraron deportes con ese criterio.</div>
      ) : (
        <div className={styles.grilla}>
          {deportesOrdenados.map((deporte) => (
            <CardDeporte
              key={deporte.id_deporte}
              nombre={deporte.nombre}
              descripcion={deporte.descripcion}
              cantidadEquipos={contarEquipos(deporte.id_deporte)}
              onClick={() => verDetalle(deporte.id_deporte)}
            />
          ))}
        </div>
      )}

      <div className={styles.guia}>
        <h3 className={styles.guiaTitulo}>Guía rápida</h3>
        <p className={styles.guiaTexto}>
          Usá la navegación o las fichas para abrir secciones y detalles. Filtrá los listados y seguí las relaciones entre deportes, equipos y competencias.
        </p>
      </div>
    </div>
  )
}