"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import useSocket from "@/hooks/useSocket"
import Button from "@/components/Button"
import Escudo from "@/components/Escudo"
import { codificarResultado, decodificarResultado, validarGoles, MAX_GOLES } from "@/utils/resultado"
import { formatearFecha, formatearHora, calcularEdad } from "@/utils/fechas"
import styles from "./page.module.css"

export default function PartidoSalaPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlParams = useParams()
  const { socket, isConnected } = useSocket({ serverUrl: "http://localhost:4000" })

  const idPartido = urlParams.id

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const [partido, setPartido] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [equipos, setEquipos] = useState([])
  const [jugadores, setJugadores] = useState([])
  const [competencia, setCompetencia] = useState(null)
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null)

  // Valores que el administrador está editando (todavía sin publicar)
  const [golesLocal, setGolesLocal] = useState("0")
  const [golesVisitante, setGolesVisitante] = useState("0")
  const [mensaje, setMensaje] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4000/partidos/${idPartido}`)
      .then((response) => response.json())
      .then((data) => {
        setPartido(data)
        setCargando(false)
        if (data) {
          const goles = decodificarResultado(data.resultado)
          setGolesLocal(String(goles.local))
          setGolesVisitante(String(goles.visitante))

          fetch(`http://localhost:4000/competencias/${data.id_competencia}`)
            .then((response) => response.json())
            .then((datosCompetencia) => setCompetencia(datosCompetencia))
            .catch(() => setCompetencia(null))
        }
      })
      .catch(() => setCargando(false))

    fetch("http://localhost:4000/equipos")
      .then((response) => response.json())
      .then((data) => setEquipos(Array.isArray(data) ? data : []))
      .catch(() => setEquipos([]))

    fetch("http://localhost:4000/jugadores")
      .then((response) => response.json())
      .then((data) => setJugadores(Array.isArray(data) ? data : []))
      .catch(() => setJugadores([]))
  }, [idPartido])

  useEffect(() => {
    if (!socket) return

    const unirse = () => {
      socket.emit("join_room", { tipo_sala: "partido", id_sala: idPartido })
    }

    const onPartidoActualizado = (data) => {
      setPartido((anterior) => (anterior ? { ...anterior, resultado: data.resultado } : anterior))
      const goles = decodificarResultado(data.resultado)
      setGolesLocal(String(goles.local))
      setGolesVisitante(String(goles.visitante))
      setUltimaActualizacion(new Date())
    }

    const onError = (data) => {
      setMensaje({ tipo: "error", texto: data.mensaje || "Ocurrió un error." })
    }

    unirse()
    // Si se corta la conexión y vuelve, hay que volver a entrar a la sala
    socket.on("connect", unirse)
    socket.on("partido_actualizado", onPartidoActualizado)
    socket.on("error_mensaje", onError)

    return () => {
      socket.off("connect", unirse)
      socket.off("partido_actualizado", onPartidoActualizado)
      socket.off("error_mensaje", onError)
      socket.emit("leave_room", { tipo_sala: "partido", id_sala: idPartido })
    }
  }, [socket, idPartido])

  // ---------- Panel del administrador ----------

  const onChangeGolesLocal = (event) => {
    setGolesLocal(event.target.value)
    setMensaje(null)
  }

  const onChangeGolesVisitante = (event) => {
    setGolesVisitante(event.target.value)
    setMensaje(null)
  }

  // Suma o resta 1 sin bajar de 0 ni pasar del máximo
  const sumar = (valor, cantidad) => {
    const numero = (Number(valor) || 0) + cantidad
    return String(Math.min(Math.max(numero, 0), MAX_GOLES))
  }

  const cambiarLocal = (cantidad) => {
    setGolesLocal(sumar(golesLocal, cantidad))
    setMensaje(null)
  }

  const cambiarVisitante = (cantidad) => {
    setGolesVisitante(sumar(golesVisitante, cantidad))
    setMensaje(null)
  }

  const descartarCambios = () => {
    // Ojo: con el React Compiler no se puede leer partido.resultado sin chequear
    // antes que partido exista (mientras carga es null)
    if (!partido) return
    const goles = decodificarResultado(partido.resultado)
    setGolesLocal(String(goles.local))
    setGolesVisitante(String(goles.visitante))
    setMensaje(null)
  }

  const publicarResultado = () => {
    const error = validarGoles(golesLocal, golesVisitante)
    if (error) {
      setMensaje({ tipo: "error", texto: error })
      return
    }
    if (!isConnected) {
      setMensaje({ tipo: "error", texto: "No hay conexión con el servidor. Esperá a que se reconecte." })
      return
    }

    // Local * 1000 + visitante → se guarda en el INT "resultado"
    const resultado = codificarResultado(golesLocal, golesVisitante)

    socket.emit("actualizar_partido", {
      id_partido: idPartido,
      resultado: resultado,
    })
    setMensaje({ tipo: "ok", texto: `Resultado publicado: ${Number(golesLocal)} - ${Number(golesVisitante)}` })
  }

  // ---------- Helpers ----------

  const volver = () => {
    if (partido && partido.id_competencia) {
      router.push(`/home/competencias/${partido.id_competencia}?${params}`)
    } else {
      router.push(`/home/competencias?${params}`)
    }
  }

  const verJugador = (idJugador) => {
    router.push(`/home/jugadores/${idJugador}?${params}`)
  }

  const verEquipo = (idEquipo) => {
    router.push(`/home/equipos/${idEquipo}?${params}`)
  }

  const buscarEquipo = (idEquipo) => {
    return equipos.find((equipo) => equipo.id_equipo === idEquipo)
  }

  const plantel = (idEquipo) => {
    return jugadores
      .filter((jugador) => jugador.id_equipo === idEquipo)
      .sort((a, b) => Number(a.posicion) - Number(b.posicion))
  }

  if (cargando) {
    return <div className={styles.contenedor}>Cargando...</div>
  }

  if (!partido) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.volver}>
          <Button onClick={volver}>← Volver a competencias</Button>
        </div>
        <h1 className={styles.titulo}>Partido no encontrado</h1>
      </div>
    )
  }

  const local = buscarEquipo(partido.id_equipo_local)
  const visitante = buscarEquipo(partido.id_equipo_visitante)
  const nombreLocal = local ? local.nombre : "A definir"
  const nombreVisitante = visitante ? visitante.nombre : "A definir"

  const marcador = decodificarResultado(partido.resultado)
  const hayCambios =
    String(Number(golesLocal)) !== String(marcador.local) ||
    String(Number(golesVisitante)) !== String(marcador.visitante)

  const equiposPlantel = [
    { clave: "local", rol: "Local", equipo: local, idEquipo: partido.id_equipo_local, nombre: nombreLocal },
    { clave: "visitante", rol: "Visitante", equipo: visitante, idEquipo: partido.id_equipo_visitante, nombre: nombreVisitante },
  ]

  return (
    <div className={styles.contenedor}>
      <div className={styles.volver}>
        <Button onClick={volver}>← Volver a la competencia</Button>
      </div>

      <span className={styles.etiqueta}>
        {competencia ? competencia.nombre : "PARTIDO"} ·{" "}
        <span className={isConnected ? styles.conectado : styles.desconectado}>
          {isConnected ? "● EN VIVO" : "○ DESCONECTADO"}
        </span>
      </span>
      <h1 className={styles.titulo}>
        {nombreLocal} vs {nombreVisitante}
      </h1>

      <div className={styles.marcador}>
        <button className={styles.marcadorEquipo} onClick={() => local && verEquipo(local.id_equipo)}>
          <Escudo imagen={local && local.logo_url} nombre={nombreLocal} tamaño={"grande"} />
          <span className={styles.marcadorNombre}>{nombreLocal}</span>
          <span className={styles.marcadorRol}>Local</span>
        </button>

        <div className={styles.marcadorCentro}>
          <span className={styles.marcadorEtiqueta}>Resultado</span>
          <div className={styles.marcadorValor}>
            <span className={styles.goles}>{marcador.local}</span>
            <span className={styles.separador}>-</span>
            <span className={styles.goles}>{marcador.visitante}</span>
          </div>
          {ultimaActualizacion && (
            <span className={styles.marcadorHora}>
              Actualizado a las {ultimaActualizacion.toLocaleTimeString("es-AR")}
            </span>
          )}
        </div>

        <button className={styles.marcadorEquipo} onClick={() => visitante && verEquipo(visitante.id_equipo)}>
          <Escudo imagen={visitante && visitante.logo_url} nombre={nombreVisitante} tamaño={"grande"} />
          <span className={styles.marcadorNombre}>{nombreVisitante}</span>
          <span className={styles.marcadorRol}>Visitante</span>
        </button>
      </div>

      <div className={styles.datos}>
        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Fecha</span>
          <span className={styles.datoValor}>{formatearFecha(partido.fecha)}</span>
        </div>

        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Hora</span>
          <span className={styles.datoValor}>{formatearHora(partido.hora)} hs</span>
        </div>

        <div className={styles.dato}>
          <span className={styles.datoEtiqueta}>Lugar</span>
          <span className={styles.datoValor}>{partido.lugar}</span>
        </div>
      </div>

      {es_admin === "1" && (
        <div className={styles.admin}>
          <div className={styles.adminCabecera}>
            <h2 className={styles.adminTitulo}>Panel del administrador</h2>
            {hayCambios && <span className={styles.sinPublicar}>Cambios sin publicar</span>}
          </div>
          <p className={styles.adminTexto}>
            Usá los botones o escribí los goles y tocá «Publicar resultado». Todos los que estén viendo el partido lo ven al instante.
          </p>

          <div className={styles.contadores}>
            <div className={styles.contador}>
              <span className={styles.contadorEquipo}>{nombreLocal}</span>
              <div className={styles.contadorControles}>
                <button className={styles.botonContador} onClick={() => cambiarLocal(-1)}>−</button>
                <input
                  className={styles.contadorInput}
                  type="number"
                  min="0"
                  max={MAX_GOLES}
                  value={golesLocal}
                  onChange={onChangeGolesLocal}
                />
                <button className={styles.botonContador} onClick={() => cambiarLocal(1)}>+</button>
              </div>
            </div>

            <span className={styles.contadorSeparador}>-</span>

            <div className={styles.contador}>
              <span className={styles.contadorEquipo}>{nombreVisitante}</span>
              <div className={styles.contadorControles}>
                <button className={styles.botonContador} onClick={() => cambiarVisitante(-1)}>−</button>
                <input
                  className={styles.contadorInput}
                  type="number"
                  min="0"
                  max={MAX_GOLES}
                  value={golesVisitante}
                  onChange={onChangeGolesVisitante}
                />
                <button className={styles.botonContador} onClick={() => cambiarVisitante(1)}>+</button>
              </div>
            </div>
          </div>

          {mensaje && (
            <div className={mensaje.tipo === "ok" ? styles.mensajeOk : styles.mensajeError}>{mensaje.texto}</div>
          )}

          <div className={styles.adminBotones}>
            <button className={styles.botonPublicar} onClick={publicarResultado}>Publicar resultado</button>
            {hayCambios && (
              <button className={styles.botonDescartar} onClick={descartarCambios}>Descartar cambios</button>
            )}
          </div>
        </div>
      )}

      <h2 className={styles.seccionTitulo}>Planteles</h2>

      <div className={styles.planteles}>
        {equiposPlantel.map((item) => {
          const lista = plantel(item.idEquipo)
          return (
            <div key={item.clave} className={styles.plantel}>
              <div className={styles.plantelCabecera}>
                <Escudo imagen={item.equipo && item.equipo.logo_url} nombre={item.nombre} tamaño={"chico"} />
                <div>
                  <span className={styles.plantelRol}>{item.rol}</span>
                  <h3 className={styles.plantelNombre}>{item.nombre}</h3>
                </div>
                <span className={styles.plantelCantidad}>{lista.length}</span>
              </div>

              {lista.length === 0 ? (
                <div className={styles.vacio}>Sin jugadores cargados.</div>
              ) : (
                <div className={styles.jugadores}>
                  {lista.map((jugador) => {
                    const edad = calcularEdad(jugador.fecha_nacimiento)
                    return (
                      <button
                        key={jugador.id_jugadores}
                        className={styles.jugador}
                        onClick={() => verJugador(jugador.id_jugadores)}
                      >
                        <span className={styles.numero}>{jugador.posicion}</span>
                        <Escudo
                          imagen={jugador.imagen_url}
                          nombre={`${jugador.nombre} ${jugador.apellido}`}
                          tamaño={"chico"}
                          redondo={true}
                        />
                        <div className={styles.jugadorDatos}>
                          <span className={styles.jugadorNombre}>
                            {jugador.nombre} {jugador.apellido}
                          </span>
                          <span className={styles.jugadorDetalle}>
                            {jugador.nacionalidad}
                            {edad !== null && ` · ${edad} años`}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
