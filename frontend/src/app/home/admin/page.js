"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import CardGestion from "@/components/CardGestion" //las tarjetas de arriba
import FilaRegistro from "@/components/FilaRegistro"
import styles from "./page.module.css"

// Valores posibles de Partidos.resultado (columna INT)
const RESULTADOS = [
  { valor: 0, texto: "Sin jugar" },
  { valor: 1, texto: "Ganó el local" },
  { valor: 2, texto: "Ganó el visitante" },
  { valor: 3, texto: "Empate" },
]

// Configuración de cada categsoría según las tablas de la base de datos.
// tipo: "text" | "number" | "date" | "time" | "select" | "booleano" | "opciones" | "imagen"
// max: largo máximo de la columna VARCHAR
//mayor facilidad al expandir categorias
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
      { nombre: "descripcion", label: "Descripción breve", tipo: "text", requerido: true, max: 50 },
      { nombre: "es_equipo", label: "Categoría", tipo: "booleano", requerido: true, opciones: ["Equipo", "Individual"] },
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
      { nombre: "id_deporte", label: "Deporte", tipo: "select", origen: "deportes", requerido: true },
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
      { nombre: "descripcion", label: "Descripción breve", tipo: "text", requerido: true, max: 50 },
      { nombre: "fecha_inicio", label: "Fecha de inicio", tipo: "date", requerido: true },
      { nombre: "fecha_fin", label: "Fecha de fin", tipo: "date", requerido: true },
      { nombre: "id_deporte", label: "Deporte", tipo: "select", origen: "deportes", requerido: true },
    ],
  },
  partidos: {
    titulo: "Partidos",
    singular: "partido",
    articulo: "el",
    nuevo: "nuevo",
    endpoint: "partidos",
    idCampo: "id_partido",
    campos: [
      //los select de parametros usan el valor de origen acllaro
      { nombre: "id_competencia", label: "Competencia", tipo: "select", origen: "competencias", requerido: true },
      { nombre: "id_equipo_local", label: "Equipo local", tipo: "select", origen: "equiposDeCompetencia", requerido: true },
      { nombre: "id_equipo_visitante", label: "Equipo visitante", tipo: "select", origen: "equiposDeCompetencia", requerido: true },
      { nombre: "fecha", label: "Fecha", tipo: "date", requerido: true },
      { nombre: "hora", label: "Hora", tipo: "time", requerido: true },
      { nombre: "lugar", label: "Lugar", tipo: "text", requerido: true, max: 100 },
      { nombre: "resultado", label: "Resultado", tipo: "opciones", requerido: true, opciones: RESULTADOS },
    ],
  },
}
//Arma un objeto con todos los campos de esa tabla en blanco, se usa al cambiar de tarjeta, al cancelar y después de guardar
const formularioVacio = (clave) => {
  const vacio = {}
  categorias[clave].campos.forEach((campo) => {
    vacio[campo.nombre] = ""
  })
  return vacio
}

// MySQL devuelve las fechas como "2027-03-12T03:00:00.000Z"
// El input type="date" necesita "2027-03-12"
const aFechaInput = (valor) => { // convierte la fecha del imput
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

const fechaLegible = (valor) => { //convierte a fecha para mostrar
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
// /uploads/ imagen subida al backend      http://localhost:4000/uploads/...
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
  const [partidos, setPartidos] = useState([])

  const [categoria, setCategoria] = useState("deportes")
  const [formulario, setFormulario] = useState(formularioVacio("deportes"))
  const [editandoId, setEditandoId] = useState(null)
  const [mensaje, setMensaje] = useState(null)
  const [subiendo, setSubiendo] = useState(false)

  const cargarDatos = () => {
    fetch("http://localhost:4000/deportes")
      .then((response) => response.json())
      .then((data) => setDeportes(Array.isArray(data) ? data : [])) //si data es una lista la usa, sino lo convierte en una lista vacia nomas para seguridad y para no comerme la cabeza con estos errores
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

    fetch("http://localhost:4000/partidos")
      .then((response) => response.json())
      .then((data) => setPartidos(Array.isArray(data) ? data : []))
      .catch(() => setPartidos([]))
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  const listas = { deportes, equipos, jugadores, competencias, partidos }
  const config = categorias[categoria]
  const registros = listas[categoria]

  // ---------- busquedas ----------

  const nombreDeporte = (idDeporte) => {
    const deporte = deportes.find((d) => d.id_deporte === idDeporte)
    return deporte ? deporte.nombre : "Sin deporte"
  }

  const nombreEquipo = (idEquipo) => {
    const equipo = equipos.find((e) => e.id_equipo === idEquipo)
    return equipo ? equipo.nombre : "Sin equipo"
  }

  const nombreCompetencia = (idCompetencia) => {
    const competencia = competencias.find((c) => c.id_competencia === idCompetencia)
    return competencia ? competencia.nombre : "Sin competencia"
  }

  const textoResultado = (valor) => {
    const resultado = RESULTADOS.find((r) => r.valor === Number(valor))
    return resultado ? resultado.texto : "Sin resultado"
  }

  const tituloRegistro = (registro) => { //para tener el nombre de un jugador para mostrar y lo mismo con partidos
    if (categoria === "jugadores") {
      return `${registro.nombre} ${registro.apellido}`
    }
    if (categoria === "partidos") {
      return `${nombreEquipo(registro.id_equipo_local)} vs ${nombreEquipo(registro.id_equipo_visitante)}`
    }
    return registro.nombre
  }

  const detalleRegistro = (registro) => { //lo mismo aca esto saca info para mostrar cada registro de cada categoria
    if (categoria === "deportes") {
      const tipo = registro.es_equipo ? "Equipo" : "Individual"
      const cantidad = equipos.filter((e) => e.id_deporte === registro.id_deporte).length
      return `${tipo} · ${cantidad} ${cantidad === 1 ? "equipo" : "equipos"} · ${registro.descripcion}`
    }
    if (categoria === "equipos") {
      const cantidad = jugadores.filter((j) => j.id_equipo === registro.id_equipo).length
      return `${nombreDeporte(registro.id_deporte)} · ${cantidad} ${cantidad === 1 ? "jugador" : "jugadores"} · ${registro.descripcion}`
    }
    if (categoria === "jugadores") {
      return `${nombreEquipo(registro.id_equipo)} · N° ${registro.posicion} · ${registro.nacionalidad}`
    }
    if (categoria === "partidos") {
      const hora = String(registro.hora || "").slice(0, 5)
      return `${nombreCompetencia(registro.id_competencia)} · ${fechaLegible(registro.fecha)} ${hora} · ${registro.lugar} · ${textoResultado(registro.resultado)}`
    }
    return `${nombreDeporte(registro.id_deporte)} · ${fechaLegible(registro.fecha_inicio)} al ${fechaLegible(registro.fecha_fin)}`
  }

  const opcionesSelect = (origen) => { //consigue los valores para los select de los formularios
    if (origen === "deportes") {
      return deportes.map((d) => ({ valor: d.id_deporte, texto: d.nombre }))
    }
    if (origen === "competencias") {
      return competencias.map((c) => ({ valor: c.id_competencia, texto: c.nombre }))
    }
    if (origen === "equiposDeCompetencia") {
      const competencia = competencias.find((c) => String(c.id_competencia) === formulario.id_competencia)
      const lista = competencia ? equipos.filter((e) => e.id_deporte === competencia.id_deporte) : equipos
      return lista.map((e) => ({ valor: e.id_equipo, texto: e.nombre }))
    }
    return equipos.map((e) => ({ valor: e.id_equipo, texto: e.nombre }))
  }

  // ---------- Formulario ----------

  const cambiarCategoria = (clave) => { //func para cambiar de formulario
    setCategoria(clave)
    setFormulario(formularioVacio(clave))
    setEditandoId(null)
    setMensaje(null)
  }

  const onChangeCampo = (nombreCampo) => (event) => {
    const cambios = { [nombreCampo]: event.target.value }
    // En partidos, al cambiar la competencia se vacían los equipos (pueden ser de otro deporte)
    if (categoria === "partidos" && nombreCampo === "id_competencia") {
      cambios.id_equipo_local = ""
      cambios.id_equipo_visitante = ""
    }
    setFormulario({ ...formulario, ...cambios })
  }

  // Sube el archivo elegido al backend y guarda la ruta que devuelve en el formulario
  const subirImagen = (nombreCampo) => (event) => {
    const archivo = event.target.files[0]//toma el archivo
    event.target.value = "" // permite volver a elegir el mismo archivo
    if (!archivo) { //si se cancela el evento se dispara igual pero como el archivo es undifined lo corta aca
      return
    }

    const datos = new FormData()
    datos.append("imagen", archivo) //append("imagen", archivo) agrega un dato llamado "imagen" con el archivo como valor ese nombre tiene que coincidir con el del backend es para formatearlo

    setSubiendo(true) //el boton pasa a ser "subiendo" la funch guardar() revisa este estado y no lo guarda si se esta subiendo
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
        setMensaje({ tipo: "error", texto: error.message || "No se pudo subir la imagen." }) //fallos
      })
      .finally(() => setSubiendo(false))
  }

  // Imagen de cada registro para la miniatura de la lista
  const imagenRegistro = (registro) => {
    if (categoria === "equipos") {
      return urlImagen(registro.logo_url) //ejecuta el el peddido
    }
    if (categoria === "jugadores") {
      return urlImagen(registro.imagen_url) //lo mismo
    }
    return null
  }

  const cancelarEdicion = () => { //no hace falta explicar mucho aca
    setFormulario(formularioVacio(categoria))
    setEditandoId(null)
    setMensaje(null)
  }

  const editar = (registro) => {
    const datos = {}  // Objeto vacío donde se van a ir guardando los valores ya convertidos para el formulario
    config.campos.forEach((campo) => { // Recorre los campos de la tabla actual (los definidos en "categorias"), uno por uno
      const valor = registro[campo.nombre]
      if (campo.tipo === "date") { //formatea cada campoq
        datos[campo.nombre] = aFechaInput(valor)
      } else if (campo.tipo === "time") {
        datos[campo.nombre] = valor ? String(valor).slice(0, 5) : ""
      } else if (campo.tipo === "booleano") {
        datos[campo.nombre] = valor ? "1" : "0"
      } else {
        datos[campo.nombre] = valor === null || valor === undefined ? "" : String(valor)
      }
    })
    setFormulario(datos) //setea el formulario con el objeto datos
    setEditandoId(registro[config.idCampo]) // Guarda el id del registro (ej: id_equipo = 5): ahora "Guardar" va a hacer PUT /equipos/5
    setMensaje(null)// Borra el cartel verde o rojo que hubiera de una acción anterior
  }

  // Arma el body: selects y números como Number, booleano como 1/0, el resto como texto
  const armarBody = () => {
    const body = {} // Objeto vacío donde se van a ir guardando los valores listos para la base
    config.campos.forEach((campo) => {  // Recorre los campos de la tabla actual (los definidos en "categorias"), uno por uno
      const valor = formulario[campo.nombre]   // Lee lo que hay escrito o elegido en ese campo
      if (["select", "number", "booleano", "opciones"].includes(campo.tipo)) {
        body[campo.nombre] = valor === "" ? null : Number(valor) //si quedó vacío manda null (sin valor) si no lo convierte a número ("3" a 3)
      } else {
        body[campo.nombre] = valor.trim() //saca espacios del inicio y final
      }
    })
    return body // Devuelve el objeto armado; guardar() lo convierte a JSON y lo manda
  }

  // Devuelve un texto de error, o null si está todo bien
  const validar = () => {
    const faltantes = config.campos.filter( //chekeamos si campos obligatorios quearon vacios
      (campo) => campo.requerido && String(formulario[campo.nombre]).trim() === "" // Un campo "falta" si es requerido Y lo escrito (sin espacios) está vacío
    )
    if (faltantes.length > 0) {
      return `Completá: ${faltantes.map((c) => c.label).join(", ")}.`  //es el error que se devielve
    }

    const largos = config.campos.filter( // Arma la lista de campos con largo máximo cuyo texto se pasa de ese máximo
      (campo) => campo.max && formulario[campo.nombre].trim().length > campo.max
    )
    //si alguno se pasa
    if (largos.length > 0) {
      return largos.map((c) => `«${c.label}» admite hasta ${c.max} caracteres.`).join(" ")
    }

    if (categoria === "partidos" && formulario.id_equipo_local === formulario.id_equipo_visitante) { //si los 2 equipos son iguales
      return "El equipo local y el visitante tienen que ser distintos."
    }

    if (categoria === "competencias" && formulario.fecha_fin < formulario.fecha_inicio) { //si inicia despues de terminar
      return "La fecha de fin no puede ser anterior a la de inicio."
    }
  
    return null //paso todos los chekeos
  }

  const guardar = (event) => { // Se ejecuta al tocar Agregar registro o Guardar cambios
    event.preventDefault()// Evita que el formulario recargue la página, que es lo que hace un <form> por defecto

    if (subiendo) { 
      setMensaje({ tipo: "error", texto: "Esperá a que termine de subir la imagen." }) //si todavia se esta subiendo una imagen se corta
      return
    }

    const error = validar() //se llama a la funcion de validacion y se devuelve el error en caso de que la validacion fallo y dio con ubn error
    if (error) {
      setMensaje({ tipo: "error", texto: error })
      return
    }

    const url = editandoId //arma direccion pedido
      ? `http://localhost:4000/${config.endpoint}/${editandoId}` //pedido si se esta editando
      : `http://localhost:4000/${config.endpoint}`//pedido si se esta posteando

    fetch(url, { //se hace el dedido
      method: editandoId ? "PUT" : "POST", //si hay un id es put y sino post
      headers: { "Content-Type": "application/json" }, //default
      body: JSON.stringify(armarBody()), // los datos que se envian
    })
      .then((response) =>
        response.json().then((data) => {
          if (!response.ok) {
            throw new Error(data.error || "No se pudo guardar.") //manda el error del backend y salta a catch
          }
          return data
        })
      )
      .then(() => {
        setMensaje({
          tipo: "ok",
          texto: editandoId
            ? `Se actualizo ${config.articulo} ${config.singular}.`//mensajes para el usuario
            : `Se agrego ${config.articulo} ${config.singular}.`, // lo miusmo de arriba
        })
        setFormulario(formularioVacio(categoria)) //deja el form en blanco para cargar otro registro
        setEditandoId(null) //sale del modo edicion
        cargarDatos() //se vuelve a pedir los datos al back asi se muestra esta edicion o registro
      })
      .catch((error) => {
        setMensaje({ tipo: "error", texto: error.message || "No se pudo guardar Revisa los datos e intenta de nuevo." })
      })
  }

  const eliminar = (registro) => { //se ejecuta al confirmar la eliminacion
    const idRegistro = registro[config.idCampo] //se saca el id del registro

    fetch(`http://localhost:4000/${config.endpoint}/${idRegistro}`, { method: "DELETE" }) //se manda el pedido al back
      .then((response) =>
        response.json().then((data) => {
          if (!response.ok) {
            throw new Error(data.error || "No se pudo eliminar.") //en caso de errores
          }
          return data
        })
      )
      .then(() => {
        setMensaje({ tipo: "ok", texto: `Se eliminó «${tituloRegistro(registro)}».` }) //mensaje de exito
        if (editandoId === idRegistro) {  //si justo se estaba editando este registro
          setFormulario(formularioVacio(categoria)) //se vacia el formularrio
          setEditandoId(null) //se sale del modo edicioon 
        }
        cargarDatos() //se renderiza los reegistros sin este eliminado
      })
      .catch((error) => {
        setMensaje({ tipo: "error", texto: error.message || "No se pudo eliminar." }) //mensaje de error
      })
  }

  // ---------- Vista/renderizado ----------

  const renderCampo = (campo) => {// Mira de qué tipo es el campo y devuelve el control que hay que mostrar
    if (campo.tipo === "select") { //si el campo a rellenar es un select
      return (
        // Muestra lo que está elegido y, al cambiar, lo guarda en el formulario
        <select className={styles.select} value={formulario[campo.nombre]} onChange={onChangeCampo(campo.nombre)}> 
          <option value="">Elegí una opción</option>
          {opcionesSelect(campo.origen).map((opcion) => ( /*se llama a la funcion para obtener las funciones*/
             /* Una opcion por cada dato de la otra tabla (ej: Futbol, Basquet) */
            <option key={opcion.valor} value={String(opcion.valor)}>
              {opcion.texto}
            </option>
          ))}
        </select>
      )
    }

    if (campo.tipo === "opciones") { //si una lista desplegable con valores fijos
      return (
        <select className={styles.select} value={formulario[campo.nombre]} onChange={onChangeCampo(campo.nombre)}>
          <option value="">Elegí una opción</option>
          {campo.opciones.map((opcion) => ( //sE dan las opcions
            <option key={opcion.valor} value={String(opcion.valor)}>
              {opcion.texto}
            </option>
          ))}
        </select>
      )
    }

    if (campo.tipo === "booleano") { // si es bool
      return (
        <select className={styles.select} value={formulario[campo.nombre]} onChange={onChangeCampo(campo.nombre)}>
          <option value="">Elegí una opción</option>
          <option value="1">{campo.opciones[0]}</option>
          <option value="0">{campo.opciones[1]}</option> 
        </select>
      )
    }

    if (campo.tipo === "imagen") {//si es un campo de imagen
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
              <label className={subiendo ? styles.botonArchivoDeshabilitado : styles.botonArchivo}> {/*boton corte oculto adentro del label*/}
                {subiendo ? "Subiendo..." : "Elegir imagen"}
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/webp, image/svg+xml" //que formato
                  onChange={subirImagen(campo.nombre)} //se llama a la func para subirla
                  disabled={subiendo} //depende de si se esta subiendo
                  hidden
                />
              </label>
              <span className={styles.ayudaImagen}>JPG, PNG, WEBP o SVG · máx. 2 MB</span> {/*aclaracion*/}
            </div>
          </div>
          <Input
            onChange={onChangeCampo(campo.nombre)} //caja con la ruta de la imagen
            placeholder={"/uploads/... o /imagenes/..."}
            value={formulario[campo.nombre]}
            type={"text"}
          />
        </div>
      )
    }
    //cualquier otro input text, num, date, etc
    return (
      <Input
        onChange={onChangeCampo(campo.nombre)}
        placeholder={""}
        value={formulario[campo.nombre]}
        type={campo.tipo}
      />
    )
  }
  
  if (es_admin !== "1") { //si no es admin no se muestrea es como un doble chequeo
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

      <div className={styles.categorias}> {/*render de todas las tarjetas*/}
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

      <div className={styles.panel}> {/*panel de edicion o creacion */}
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
              <label className={styles.labelCampo}> {/*las cosas de arriba de cada cambo osea el nombre y la marquita de su es obligatorio*/}
                {campo.label}
                {campo.requerido && <span className={styles.requerido}> *</span>}
              </label>
              {renderCampo(campo)}{/*func para renderizar el campo*/}
              {campo.max && (
                <span className={styles.ayuda}>
                  {formulario[campo.nombre].length} / {campo.max} {/*aclara cuanto espacio has usado y el limite*/}
                </span>
              )}
            </div>
          ))}

          {mensaje && (
            <div className={mensaje.tipo === "ok" ? styles.mensajeOk : styles.mensajeError}>
              {mensaje.texto} {/*el mensaje de abajo*/}
            </div>
          )}

          <div className={styles.botones}>
            <div className={styles.botonPrincipal}>
              <Button type={"submit"}>{editandoId ? "Guardar cambios" : "Agregar registro"}</Button> {/*boton de agregar registro*/}
            </div>
            {editandoId && (
              <div className={styles.botonSecundario}>
                <Button type={"button"} onClick={cancelarEdicion}>Cancelar</Button> {/*boton de cancelamiento*/}
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
            <div className={styles.vacio}>Todavía no hay registros en esta categoría.</div> //por si la categoria esta vacia
          ) : (
            <div className={styles.lista}>
              {registros.map((registro) => (
                <FilaRegistro
                //cada registro junto con sus funciones on editar o eliminar
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
        <p className={styles.guiaTexto}>{/*prefooter o guia */}
          Elegí una categoría para ver sus registros. Usá el formulario para agregar uno nuevo, o tocá «Editar» para cargarlo en el formulario. Para eliminar se pide una confirmación antes de borrar.
        </p>
      </div>
    </div>
  )
}