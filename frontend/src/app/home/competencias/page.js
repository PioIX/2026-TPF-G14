"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import CardCompetencia from "@/components/CardCompetencia"
import styles from "./page.module.css"

export default function CompetenciasPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [competencias, setCompetencias] = useState([])
  const [eventos, setEventos] = useState([])
  const [deportes, setDeportes] = useState([])
  const [equipos, setEquipos] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [filtroDeporte, setFiltroDeporte] = useState("todos")
  const [filtroTipo, setFiltroTipo] = useState("todos")
  const [orden, setOrden] = useState("az")

  useEffect(() => {
    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => setCompetencias(Array.isArray(data) ? data : []))
      .catch(() => setCompetencias([]))

    fetch("http://localhost:4000/eventos")
      .then((response) => response.json())
      .then((data) => setEventos(Array.isArray(data) ? data : []))
      .catch(() => setEventos([]))

    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : []))
      .catch(() => setDeportes([]))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))
  }, [])

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value)
  }

  const onChangeDeporte = (event) => {
    setFiltroDeporte(event.target.value)
  }

  const onChangeTipo = (event) => {
    setFiltroTipo(event.target.value)
  }

  const onChangeOrden = (event) => {
    setOrden(event.target.value)
  }

  const limpiarFiltros = () => {
    setBusqueda("")
    setFiltroDeporte("todos")
    setFiltroTipo("todos")
    setOrden("az")
  }

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const nombreEquipo = (idEquipo) => {
    const equipo = equipos.find((e) => e.id_equipo === idEquipo)
    return equipo ? equipo.nombre : null
  }

  // Convierte la fecha que llega de MySQL a un Date (o null si no hay)
  const convertirFecha = (valor) => {
    if (!valor) {
      return null
    }
    const texto = String(valor).length === 10 ? `${valor}T00:00:00` : valor
    const fecha = new Date(texto)
    return isNaN(fecha.getTime()) ? null : fecha
  }

  // Si la competencia no tiene fecha propia, se usa la de su primer evento
  const fechaCompetencia = (competencia) => {
    if (competencia.fecha_inicio) {
      return convertirFecha(competencia.fecha_inicio)
    }
    const fechas = eventos
      .filter((evento) => evento.id_competencia === competencia.id_competencia)
      .map((evento) => convertirFecha(evento.fecha))
      .filter((fecha) => fecha !== null)
      .sort((a, b) => a - b)
    return fechas.length > 0 ? fechas[0] : null
  }

  const nombreEvento = (evento, competencia) => {
    const local = nombreEquipo(evento.id_equipo_local)
    const visitante = nombreEquipo(evento.id_equipo_visitante)
    if (local && visitante) {
      return `${local} vs ${visitante}`
    }
    return competencia ? competencia.nombre : `Evento ${evento.id_evento}`
  }

  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)

  const calcularEstado = (tipo, fecha) => {
    if (!fecha) {
      return { texto: "Sin fecha", proximo: false }
    }
    if (fecha >= hoy) {
      return { texto: tipo === "Competencia" ? "Próxima competencia" : "Próximo evento", proximo: true }
    }
    return { texto: tipo === "Competencia" ? "Finalizada" : "Finalizado", proximo: false }
  }

  // Une competencias y eventos en un solo listado
  const itemsCompetencias = competencias.map((competencia) => ({
    clave: `c-${competencia.id_competencia}`,
    tipo: "Competencia",
    nombre: competencia.nombre,
    idDeporte: competencia.id_deporte,
    fecha: fechaCompetencia(competencia),
    ruta: `/home/competencias/${competencia.id_competencia}`,
  }))

  const itemsEventos = eventos.map((evento) => {
    const competencia = competencias.find((c) => c.id_competencia === evento.id_competencia)
    return {
      clave: `e-${evento.id_evento}`,
      tipo: "Evento",
      nombre: nombreEvento(evento, competencia),
      idDeporte: competencia ? competencia.id_deporte : null,
      fecha: convertirFecha(evento.fecha),
      ruta: `/home/eventos/${evento.id_evento}`,
    }
  })

  const items = [...itemsCompetencias, ...itemsEventos]

  const verDetalle = (ruta) => {
    router.push(`${ruta}?${params}`)
  }

  const texto = busqueda.toLowerCase()

  const itemsFiltrados = items.filter((item) => {
    const coincideTexto =
      item.nombre.toLowerCase().includes(texto) ||
      nombreDeporte(item.idDeporte).toLowerCase().includes(texto)

    const coincideDeporte =
      filtroDeporte === "todos" || String(item.idDeporte) === filtroDeporte

    const coincideTipo =
      filtroTipo === "todos" || item.tipo.toLowerCase() === filtroTipo

    return coincideTexto && coincideDeporte && coincideTipo
  })

  const itemsOrdenados = [...itemsFiltrados].sort((a, b) => {
    if (orden === "az") {
      return a.nombre.localeCompare(b.nombre)
    }
    if (orden === "za") {
      return b.nombre.localeCompare(a.nombre)
    }
    // Por fecha: primero las próximas (la más cercana arriba), después las
    // finalizadas (la más reciente arriba) y al final las que no tienen fecha
    if (!a.fecha && !b.fecha) return 0
    if (!a.fecha) return 1
    if (!b.fecha) return -1
    const aProxima = a.fecha >= hoy
    const bProxima = b.fecha >= hoy
    if (aProxima && !bProxima) return -1
    if (!aProxima && bProxima) return 1
    return aProxima ? a.fecha - b.fecha : b.fecha - a.fecha
  })

  const hayFiltros = busqueda !== "" || filtroDeporte !== "todos" || filtroTipo !== "todos"

  return (
    <div className={styles.contenedor}>
      <span className={styles.etiqueta}>EXPLORAR / PIOZONE</span>
      <h1 className={styles.titulo}>Competencias y eventos</h1>
      <p className={styles.descripcion}>
        Consultá competencias y eventos, ordenados y etiquetados por deporte y fecha.
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
            <label className={styles.labelCampo}>Tipo</label>
            <select className={styles.select} value={filtroTipo} onChange={onChangeTipo}>
              <option value="todos">Todos</option>
              <option value="competencia">Competencias</option>
              <option value="evento">Eventos</option>
            </select>
          </div>

          <div className={styles.campo}>
            <label className={styles.labelCampo}>Ordenar por</label>
            <select className={styles.select} value={orden} onChange={onChangeOrden}>
              <option value="az">Nombre A–Z</option>
              <option value="za">Nombre Z–A</option>
              <option value="fecha">Fecha</option>
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
            {filtroTipo !== "todos" && (
              <span className={styles.chip}>{filtroTipo === "competencia" ? "Competencias" : "Eventos"}</span>
            )}
          </div>
        )}
      </div>

      {itemsOrdenados.length === 0 ? (
        <div className={styles.vacio}>No se encontraron competencias ni eventos con ese criterio.</div>
      ) : (
        <div className={styles.grilla}>
          {itemsOrdenados.map((item) => {
            const estado = calcularEstado(item.tipo, item.fecha)
            return (
              <CardCompetencia
                key={item.clave}
                tipo={item.tipo}
                nombre={item.nombre}
                deporte={nombreDeporte(item.idDeporte)}
                fecha={item.fecha}
                estado={estado.texto}
                proximo={estado.proximo}
                onClick={() => verDetalle(item.ruta)}
              />
            )
          })}
        </div>
      )}

      <div className={styles.guia}>
        <h3 className={styles.guiaTitulo}>Guía rápida</h3>
        <p className={styles.guiaTexto}>
          Usá la navegación o las fichas para abrir secciones y detalles. Filtrá por deporte o tipo, ordená por fecha para ver lo próximo primero y seguí las relaciones entre competencias, eventos y equipos.
        </p>
      </div>
    </div>
  )
}
