"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import CardGestion from "@/components/CardGestion"
import FilaRegistro from "@/components/FilaRegistro"
import styles from "./page.module.css"

// Configuración de cada categoría según las tablas de la base de datos.
// tipo: "text" | "number" | "date" | "select" | "booleano" | "imagen"
// max: largo máximo de la columna VARCHAR
const categorias = {
  deportes: {
    titulo: "Deportes",
    singular: "deporte",
    articulo: "el",
    nuevo: "nuevo",
    endpoint: "deportes",
    idCampo: "id_deporte",
    campos: [
      { nombre: "nombre", label: "Nombre", tipo: "text", requerido: true, max: 100 },
      { nombre: "descrpcion", label: "Descripción breve", tipo: "text", requerido: true, max: 50 },
      { nombre: "es_equipo", label: "Categoría", tipo: "booleano", requerido: true, opciones: ["Equipo", "Individual"] },
      { nombre: "id_equipo", label: "Equipo / club de referencia", tipo: "select", origen: "equipos", requerido: true },
    ],
  },
  equipos: {
    titulo: "Equipos",
    singular: "equipo",
    articulo: "el",
    nuevo: "nuevo",
    endpoint: "equipos",
    idCampo: "id_equipo",
    campos: [
      { nombre: "nombre", label: "Nombre", tipo: "text", requerido: true, max: 100 },
      { nombre: "logo_url", label: "Logo", tipo: "imagen", requerido: true, max: 50 },
      { nombre: "descripcion", label: "Descripción", tipo: "text", requerido: true, max: 255 },
      { nombre: "cant_jugadores", label: "Cantidad de jugadores", tipo: "number" },
    ],
  },
  jugadores: {
    titulo: "Jugadores",
    singular: "jugador",
    articulo: "el",
    nuevo: "nuevo",
    endpoint: "jugadores",
    idCampo: "id_jugadores",
    campos: [
      { nombre: "nombre", label: "Nombre", tipo: "text", requerido: true, max: 100 },
      { nombre: "apellido", label: "Apellido", tipo: "text", requerido: true, max: 100 },
      { nombre: "fecha_nacimiento", label: "Fecha de nacimiento", tipo: "date", requerido: true },
      { nombre: "nacionalidad", label: "Nacionalidad", tipo: "text", requerido: true, max: 100 },
      { nombre: "posicion", label: "Posición (número)", tipo: "number", requerido: true },
      { nombre: "imagen_url", label: "Foto", tipo: "imagen", requerido: true, max: 100 },
      { nombre: "id_equipo", label: "Equipo", tipo: "select", origen: "equipos", requerido: true },
    ],
  },
  competencias: {
    titulo: "Competencias",
    singular: "competencia",
    articulo: "la",
    nuevo: "nueva",
    endpoint: "competencias",
    idCampo: "id_competencia",
    campos: [
      { nombre: "nombre", label: "Nombre", tipo: "text", requerido: true, max: 100 },
      { nombre: "descrpcion", label: "Descripción breve", tipo: "text", requerido: true, max: 50 },
      { nombre: "fecha_inicio", label: "Fecha de inicio", tipo: "date", requerido: true },
      { nombre: "fecha_fin", label: "Fecha de fin", tipo: "date", requerido: true },
      { nombre: "id_deporte", label: "Deporte", tipo: "select", origen: "deportes", requerido: true },
    ],
  },
}

const formularioVacio = (clave) => {
  const vacio = {}
  categorias[clave].campos.forEach((campo) => {
    vacio[campo.nombre] = ""
  })
  return vacio
}

// MySQL devuelve las fechas como "2027-03-12T03:00:00.000Z".
// El input type="date" necesita "2027-03-12".
const aFechaInput = (valor) => {
  if (!valor) {
    return ""
  }
  if (String(valor).length === 10) {
    return String(valor)
  }
  const fecha = new Date(valor)
  if (isNaN(fecha.getTime())) {
    return ""
  }
  const mes = String(fecha.getMonth() + 1).padStart(2, "0")
  const dia = String(fecha.getDate()).padStart(2, "0")
  return `${fecha.getFullYear()}-${mes}-${dia}`
}

const fechaLegible = (valor) => {
  const texto = aFechaInput(valor)
  if (!texto) {
    return "Sin fecha"
  }
  const [anio, mes, dia] = texto.split("-")
  return `${dia}/${mes}/${anio}`
}

// Dirección del backend (donde quedan las imágenes subidas)
const BACKEND = "http://localhost:4000"

// Convierte lo guardado en la base en una dirección que el navegador pueda mostrar:
//  - "/uploads/..."  → imagen subida al backend      → http://localhost:4000/uploads/...
//  - "/imagenes/..." → imagen en frontend/public     → se usa tal cual
//  - "https://..."   → imagen de internet            → se usa tal cual
const urlImagen = (valor) => {
  if (!valor) {
    return null
  }
  if (valor.startsWith("/uploads/")) {
    return `${BACKEND}${valor}`
  }
  return valor
}

export default function AdminPage() {
  const searchParams = useSearchParams()
  const es_admin = searchParams.get("es_admin")

  const [deportes, setDeportes] = useState([])
  const [equipos, setEquipos] = useState([])
  const [jugadores, setJugadores] = useState([])
  const [competencias, setCompetencias] = useState([])

  const [categoria, setCategoria] = useState("deportes")
  const [formulario, setFormulario] = useState(formularioVacio("deportes"))
  const [editandoId, setEditandoId] = useState(null)
  const [mensaje, setMensaje] = useState(null)
  const [subiendo, setSubiendo] = useState(false)

  const cargarDatos = () => {
    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : []))
      .catch(() => setDeportes([]))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => setJugadores(Array.isArray(data) ? data : []))
      .catch(() => setJugadores([]))

    fetch("http://localhost:4000/competencias")
      .then((response) => response.json())
      .then((data) => setCompetencias(Array.isArray(data) ? data : []))
      .catch(() => setCompetencias([]))
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  const listas = { deportes, equipos, jugadores, competencias }
  const config = categorias[categoria]
  const registros = listas[categoria]

  // ---------- Helpers para mostrar relaciones ----------

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const nombreEquipo = (idEquipo) => {
    const equipo = equipos.find((e) => e.id_equipo === idEquipo)
    return equipo ? equipo.nombre : "Sin equipo"
  }

  const tituloRegistro = (registro) => {
    if (categoria === "jugadores") {
      return `${registro.nombre} ${registro.apellido}`
    }
    return registro.nombre
  }

  const detalleRegistro = (registro) => {
    if (categoria === "deportes") {
      const tipo = registro.es_equipo ? "Equipo" : "Individual"
      return `${tipo} · ${registro.descrpcion} · Ref.: ${nombreEquipo(registro.id_equipo)}`
    }
    if (categoria === "equipos") {
      const cantidad = jugadores.filter((j) => j.id_equipo === registro.id_equipo).length
      return `${cantidad} ${cantidad === 1 ? "jugador" : "jugadores"} · ${registro.descripcion}`
    }
    if (categoria === "jugadores") {
      return `${nombreEquipo(registro.id_equipo)} · N° ${registro.posicion} · ${registro.nacionalidad}`
    }
    return `${nombreDeporte(registro.id_deporte)} · ${fechaLegible(registro.fecha_inicio)} al ${fechaLegible(registro.fecha_fin)}`
  }

  const opcionesSelect = (origen) => {
    if (origen === "deportes") {
      return deportes.map((d) => ({ valor: d.id_deporte, texto: d.nombre }))
    }
    return equipos.map((e) => ({ valor: e.id_equipo, texto: e.nombre }))
  }

  // ---------- Formulario ----------

  const cambiarCategoria = (clave) => {
    setCategoria(clave)
    setFormulario(formularioVacio(clave))
    setEditandoId(null)
    setMensaje(null)
  }

  const onChangeCampo = (nombreCampo) => (event) => {
    setFormulario({ ...formulario, [nombreCampo]: event.target.value })
  }

  // Sube el archivo elegido al backend y guarda la ruta que devuelve en el formulario
  const subirImagen = (nombreCampo) => (event) => {
    const archivo = event.target.files[0]
    event.target.value = "" // permite volver a elegir el mismo archivo
    if (!archivo) {
      return
    }

    const datos = new FormData()
    datos.append("imagen", archivo)

    setSubiendo(true)
    setMensaje(null)

    // Sin "Content-Type": el navegador lo arma solo para FormData
    fetch(`${BACKEND}/upload`, { method: "POST", body: datos })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error)
        }
        setFormulario((anterior) => ({ ...anterior, [nombreCampo]: data.ruta }))
        setMensaje({ tipo: "ok", texto: "Imagen subida. Guardá el registro para aplicarla." })
      })
      .catch((error) => {
        setMensaje({ tipo: "error", texto: error.message || "No se pudo subir la imagen." })
      })
      .finally(() => setSubiendo(false))
  }

  // Imagen de cada registro para la miniatura de la lista
  const imagenRegistro = (registro) => {
    if (categoria === "equipos") {
      return urlImagen(registro.logo_url)
    }
    if (categoria === "jugadores") {
      return urlImagen(registro.imagen_url)
    }
    return null
  }

  const cancelarEdicion = () => {
    setFormulario(formularioVacio(categoria))
    setEditandoId(null)
    setMensaje(null)
  }

  const editar = (registro) => {
    const datos = {}
    config.campos.forEach((campo) => {
      const valor = registro[campo.nombre]
      if (campo.tipo === "date") {
        datos[campo.nombre] = aFechaInput(valor)
      } else if (campo.tipo === "booleano") {
        datos[campo.nombre] = valor ? "1" : "0"
      } else {
        datos[campo.nombre] = valor === null || valor === undefined ? "" : String(valor)
      }
    })
    setFormulario(datos)
    setEditandoId(registro[config.idCampo])
    setMensaje(null)
  }

  // Arma el body: selects y números como Number, booleano como 1/0, el resto como texto
  const armarBody = () => {
    const body = {}
    config.campos.forEach((campo) => {
      const valor = formulario[campo.nombre]
      if (campo.tipo === "select" || campo.tipo === "number" || campo.tipo === "booleano") {
        body[campo.nombre] = valor === "" ? null : Number(valor)
      } else {
        body[campo.nombre] = valor.trim()
      }
    })
    return body
  }

  // Devuelve un texto de error, o null si está todo bien
  const validar = () => {
    const faltantes = config.campos.filter(
      (campo) => campo.requerido && String(formulario[campo.nombre]).trim() === ""
    )
    if (faltantes.length > 0) {
      return `Completá: ${faltantes.map((c) => c.label).join(", ")}.`
    }

    const largos = config.campos.filter(
      (campo) => campo.max && formulario[campo.nombre].trim().length > campo.max
    )
    if (largos.length > 0) {
      return largos.map((c) => `«${c.label}» admite hasta ${c.max} caracteres.`).join(" ")
    }

    if (categoria === "competencias" && formulario.fecha_fin < formulario.fecha_inicio) {
      return "La fecha de fin no puede ser anterior a la de inicio."
    }

    return null
  }

  const guardar = (event) => {
    event.preventDefault()

    if (subiendo) {
      setMensaje({ tipo: "error", texto: "Esperá a que termine de subir la imagen." })
      return
    }

    const error = validar()
    if (error) {
      setMensaje({ tipo: "error", texto: error })
      return
    }

    const url = editandoId
      ? `http://localhost:4000/${config.endpoint}/${editandoId}`
      : `http://localhost:4000/${config.endpoint}`

    fetch(url, {
      method: editandoId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(armarBody()),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al guardar")
        }
        return response.json()
      })
      .then(() => {
        setMensaje({
          tipo: "ok",
          texto: editandoId
            ? `Se actualizó ${config.articulo} ${config.singular}.`
            : `Se agregó ${config.articulo} ${config.singular}.`,
        })
        setFormulario(formularioVacio(categoria))
        setEditandoId(null)
        cargarDatos()
      })
      .catch(() => {
        setMensaje({ tipo: "error", texto: "No se pudo guardar. Revisá los datos e intentá de nuevo." })
      })
  }

  const eliminar = (registro) => {
    const idRegistro = registro[config.idCampo]

    fetch(`http://localhost:4000/${config.endpoint}/${idRegistro}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar")
        }
        return response.json()
      })
      .then(() => {
        setMensaje({ tipo: "ok", texto: `Se eliminó «${tituloRegistro(registro)}».` })
        if (editandoId === idRegistro) {
          setFormulario(formularioVacio(categoria))
          setEditandoId(null)
        }
        cargarDatos()
      })
      .catch(() => {
        setMensaje({
          tipo: "error",
          texto: "No se pudo eliminar porque otros registros dependen de este (por ejemplo, jugadores de un equipo o competencias de un deporte).",
        })
      })
  }

  // ---------- Vista ----------

  const renderCampo = (campo) => {
    if (campo.tipo === "select") {
      return (
        <select className={styles.select} value={formulario[campo.nombre]} onChange={onChangeCampo(campo.nombre)}>
          <option value="">Elegí una opción</option>
          {opcionesSelect(campo.origen).map((opcion) => (
            <option key={opcion.valor} value={String(opcion.valor)}>
              {opcion.texto}
            </option>
          ))}
        </select>
      )
    }

    if (campo.tipo === "booleano") {
      return (
        <select className={styles.select} value={formulario[campo.nombre]} onChange={onChangeCampo(campo.nombre)}>
          <option value="">Elegí una opción</option>
          <option value="1">{campo.opciones[0]}</option>
          <option value="0">{campo.opciones[1]}</option>
        </select>
      )
    }

    if (campo.tipo === "imagen") {
      const vistaPrevia = urlImagen(formulario[campo.nombre])
      return (
        <div className={styles.imagenCampo}>
          <div className={styles.imagenFila}>
            <div className={styles.preview}>
              {vistaPrevia ? (
                <img src={vistaPrevia} alt="Vista previa" />
              ) : (
                <span className={styles.previewVacia}>Sin imagen</span>
              )}
            </div>
            <div className={styles.imagenAcciones}>
              <label className={subiendo ? styles.botonArchivoDeshabilitado : styles.botonArchivo}>
                {subiendo ? "Subiendo..." : "Elegir imagen"}
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/webp, image/svg+xml"
                  onChange={subirImagen(campo.nombre)}
                  disabled={subiendo}
                  hidden
                />
              </label>
              <span className={styles.ayudaImagen}>JPG, PNG, WEBP o SVG · máx. 2 MB</span>
            </div>
          </div>
          <Input
            onChange={onChangeCampo(campo.nombre)}
            placeholder={"/uploads/... o /imagenes/..."}
            value={formulario[campo.nombre]}
            type={"text"}
          />
        </div>
      )
    }

    return (
      <Input
        onChange={onChangeCampo(campo.nombre)}
        placeholder={""}
        value={formulario[campo.nombre]}
        type={campo.tipo}
      />
    )
  }

  if (es_admin !== "1") {
    return (
      <div className={styles.contenedor}>
        <span className={styles.etiqueta}>ADMINISTRACIÓN / PIOZONE</span>
        <h1 className={styles.titulo}>Acceso restringido</h1>
        <div className={styles.restringido}>
          Esta sección es solo para administradores. Volvé al inicio para seguir explorando.
        </div>
      </div>
    )
  }

  return (
    <div className={styles.contenedor}>
      <span className={styles.etiqueta}>ADMINISTRACIÓN / PIOZONE</span>
      <h1 className={styles.titulo}>Panel de administración</h1>
      <p className={styles.descripcion}>
        Agregá, editá y eliminá registros. Los cambios se guardan en la base de datos.
      </p>

      <h2 className={styles.seccionTitulo}>Gestionar categorías</h2>

      <div className={styles.categorias}>
        {Object.keys(categorias).map((clave) => (
          <CardGestion
            key={clave}
            titulo={categorias[clave].titulo}
            cantidad={listas[clave].length}
            activa={categoria === clave}
            onClick={() => cambiarCategoria(clave)}
          />
        ))}
      </div>

      <div className={styles.panel}>
        <form className={styles.formulario} onSubmit={guardar}>
          <span className={editandoId ? styles.modoEditar : styles.modoAgregar}>
            {editandoId ? "MODO EDICIÓN" : "NUEVO REGISTRO"}
          </span>
          <h2 className={styles.formTitulo}>
            {editandoId ? `Editar ${config.singular}` : `Agregar ${config.singular}`}
          </h2>
          <p className={styles.formTexto}>
            {editandoId
              ? "Modificá los campos y guardá los cambios."
              : `Completá los datos para crear ${config.articulo === "la" ? "una" : "un"} ${config.nuevo} ${config.singular}.`}
          </p>

          {config.campos.map((campo) => (
            <div key={campo.nombre} className={styles.campo}>
              <label className={styles.labelCampo}>
                {campo.label}
                {campo.requerido && <span className={styles.requerido}> *</span>}
              </label>
              {renderCampo(campo)}
              {campo.max && (
                <span className={styles.ayuda}>
                  {formulario[campo.nombre].length} / {campo.max}
                </span>
              )}
            </div>
          ))}

          {mensaje && (
            <div className={mensaje.tipo === "ok" ? styles.mensajeOk : styles.mensajeError}>
              {mensaje.texto}
            </div>
          )}

          <div className={styles.botones}>
            <div className={styles.botonPrincipal}>
              <Button type={"submit"}>{editandoId ? "Guardar cambios" : "Agregar registro"}</Button>
            </div>
            {editandoId && (
              <div className={styles.botonSecundario}>
                <Button type={"button"} onClick={cancelarEdicion}>Cancelar</Button>
              </div>
            )}
          </div>
        </form>

        <div className={styles.registros}>
          <div className={styles.registrosCabecera}>
            <h2 className={styles.formTitulo}>Registros · {config.titulo}</h2>
            <span className={styles.contador}>{registros.length}</span>
          </div>

          {registros.length === 0 ? (
            <div className={styles.vacio}>Todavía no hay registros en esta categoría.</div>
          ) : (
            <div className={styles.lista}>
              {registros.map((registro) => (
                <FilaRegistro
                  key={registro[config.idCampo]}
                  titulo={tituloRegistro(registro)}
                  detalle={detalleRegistro(registro)}
                  imagen={imagenRegistro(registro)}
                  editando={editandoId === registro[config.idCampo]}
                  onEditar={() => editar(registro)}
                  onEliminar={() => eliminar(registro)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.guia}>
        <h3 className={styles.guiaTitulo}>Guía rápida</h3>
        <p className={styles.guiaTexto}>
          Elegí una categoría para ver sus registros. Usá el formulario para agregar uno nuevo, o tocá «Editar» para cargarlo en el formulario. Para eliminar se pide una confirmación antes de borrar.
        </p>
      </div>
    </div>
  )
}