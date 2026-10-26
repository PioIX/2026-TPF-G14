const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { Server } = require("socket.io");
const { realizarQuery } = require("./modulos/mysql");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(express.json());

const sessionMiddleware = session({
  secret: "supersarasa",
  resave: false,
  saveUninitialized: false,
});
app.use(sessionMiddleware);

const server = app.listen(PORT, () => {
  console.log(`[PioZone] Servidor corriendo en http://localhost:${PORT}/`);
});

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});


// GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET (SIN ESPECIFICACION)

app.get("/deportes", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Deportes");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/equipos", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Equipos");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/jugadores", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Jugadores");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/competencias", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Competencias");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/eventos", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Eventos");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Usuarios_tpf");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/chats", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Chats");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/mensajes", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Mensajes");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//GET ID GET ID GET ID GET ID GET ID GET ID GET ID GET ID GET ID GET ID 

app.get("/deportes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Deportes WHERE id_deporte = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/equipos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Equipos WHERE id_equipo = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/jugadores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Jugadores WHERE id_jugador = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/competencias/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Competencias WHERE id_competencia = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/eventos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Eventos WHERE id_evento = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Usuarios_tpf WHERE id_usuario = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/chats/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Chats WHERE id_chat = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/mensajes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Mensajes WHERE id_mensaje = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//POST POST POST POST POST POST POST POST POST POST POST POST

app.post("/deportes", async (req, res) => {
  try {
    const { nombre, descripcion, foto } = req.body;
    const sql = "INSERT INTO Deportes (nombre, descripcion, foto) VALUES (?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, descripcion, foto]);
    res.json({ id_deporte: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/equipos", async (req, res) => {
  try {
    const { nombre, escudo, id_deporte, id_competencia } = req.body;
    const sql = "INSERT INTO Equipos (nombre, escudo, id_deporte, id_competencia) VALUES (?, ?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, escudo, id_deporte, id_competencia]);
    res.json({ id_equipo: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/jugadores", async (req, res) => {
  try {
    const { nombre, apellido, posicion, foto, id_equipo } = req.body;
    const sql = "INSERT INTO Jugadores (nombre, apellido, posicion, foto, id_equipo) VALUES (?, ?, ?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, apellido, posicion, foto, id_equipo]);
    res.json({ id_jugador: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/competencias", async (req, res) => {
  try {
    const { nombre, tipo, id_deporte } = req.body;
    const sql = "INSERT INTO Competencias (nombre, tipo, id_deporte) VALUES (?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, tipo, id_deporte]);
    res.json({ id_competencia: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/eventos", async (req, res) => {
  try {
    const { fecha, ubicacion, id_equipo_local, id_equipo_visitante, id_competencia } = req.body;
    const sql = "INSERT INTO Eventos (fecha, ubicacion, id_equipo_local, id_equipo_visitante, id_competencia) VALUES (?, ?, ?, ?, ?)";
    const result = await realizarQuery(sql, [fecha, ubicacion, id_equipo_local, id_equipo_visitante, id_competencia]);
    res.json({ id_evento: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/usuarios", async (req, res) => {
  try {
    const { nombre, apellido, email, contraseña, es_admin } = req.body;
    const sql = "INSERT INTO Usuarios_tpf (nombre, apellido, email, `contraseña`, es_admin) VALUES (?, ?, ?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, apellido, email, contraseña, es_admin]);
    res.json({ id_usuario: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/chats", async (req, res) => {
  try {
    const { nombre, tipo } = req.body;
    const sql = "INSERT INTO Chats (nombre, tipo) VALUES (?, ?)";
    const result = await realizarQuery(sql, [nombre, tipo]);
    res.json({ id_chat: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/mensajes", async (req, res) => {
  try {
    const { contenido, estado, id_chat, id_usuario } = req.body;
    const sql = "INSERT INTO Mensajes (contenido, fecha_envio, estado, id_chat, id_usuario) VALUES (?, NOW(), ?, ?, ?)";
    const result = await realizarQuery(sql, [contenido, estado || "enviado", id_chat, id_usuario]);
    res.json({ id_mensaje: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT

// PUT para la actualización de registros en cada tabla

app.put("/deportes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, foto } = req.body;
    const sql = "UPDATE Deportes SET nombre = ?, descripcion = ?, foto = ? WHERE id_deporte = ?";
    await realizarQuery(sql, [nombre, descripcion, foto, id]);
    res.json({ id_deporte: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/equipos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, escudo, id_deporte, id_competencia } = req.body;
    const sql = "UPDATE Equipos SET nombre = ?, escudo = ?, id_deporte = ?, id_competencia = ? WHERE id_equipo = ?";
    await realizarQuery(sql, [nombre, escudo, id_deporte, id_competencia, id]);
    res.json({ id_equipo: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/jugadores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, posicion, foto, id_equipo } = req.body;
    const sql = "UPDATE Jugadores SET nombre = ?, apellido = ?, posicion = ?, foto = ?, id_equipo = ? WHERE id_jugador = ?";
    await realizarQuery(sql, [nombre, apellido, posicion, foto, id_equipo, id]);
    res.json({ id_jugador: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/competencias/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, tipo, id_deporte } = req.body;
    const sql = "UPDATE Competencias SET nombre = ?, tipo = ?, id_deporte = ? WHERE id_competencia = ?";
    await realizarQuery(sql, [nombre, tipo, id_deporte, id]);
    res.json({ id_competencia: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/eventos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, ubicacion, id_equipo_local, id_equipo_visitante, id_competencia } = req.body;
    const sql = "UPDATE Eventos SET fecha = ?, ubicacion = ?, id_equipo_local = ?, id_equipo_visitante = ?, id_competencia = ? WHERE id_evento = ?";
    await realizarQuery(sql, [fecha, ubicacion, id_equipo_local, id_equipo_visitante, id_competencia, id]);
    res.json({ id_evento: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email, contraseña, es_admin } = req.body;
    const sql = "UPDATE Usuarios_tpf SET nombre = ?, apellido = ?, email = ?, `contraseña` = ?, es_admin = ? WHERE id_usuario = ?";
    await realizarQuery(sql, [nombre, apellido, email, contraseña, es_admin, id]);
    res.json({ id_usuario: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/chats/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, tipo } = req.body;
    const sql = "UPDATE Chats SET nombre = ?, tipo = ? WHERE id_chat = ?";
    await realizarQuery(sql, [nombre, tipo, id]);
    res.json({ id_chat: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/mensajes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { contenido, estado, id_chat, id_usuario } = req.body;
    const sql = "UPDATE Mensajes SET contenido = ?, estado = ?, id_chat = ?, id_usuario = ? WHERE id_mensaje = ?";
    await realizarQuery(sql, [contenido, estado, id_chat, id_usuario, id]);
    res.json({ id_mensaje: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//DELETE DELETE DELETE DELETE DELETE DELETE DELETE DELETE DELETE

app.delete("/deportes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Deportes WHERE id_deporte = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Deporte eliminado", id_deporte: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/equipos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Equipos WHERE id_equipo = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Equipo eliminado", id_equipo: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/jugadores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Jugadores WHERE id_jugador = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Jugador eliminado", id_jugador: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/competencias/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Competencias WHERE id_competencia = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Competencia eliminada", id_competencia: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/eventos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Eventos WHERE id_evento = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Evento eliminado", id_evento: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Usuarios_tpf WHERE id_usuario = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Usuario eliminado", id_usuario: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/chats/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Chats WHERE id_chat = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Chat eliminado", id_chat: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/mensajes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Mensajes WHERE id_mensaje = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Mensaje eliminado", id_mensaje: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Eventos de WebSockets
io.on("connection", (socket) => {
  console.log(`[PioZone Socket] Cliente conectado: ${socket.id}`);

  // 1. Unirse a salas (Soporta id directo o estructura con tipo_sala para eventos/chats)
  socket.on("join_room", (data) => {
    const sala =
      typeof data === "object"
        ? `${data.tipo_sala || "chat"}_${data.id_sala}`
        : `chat_${data}`;

    socket.join(sala);
    console.log(`[PioZone Socket] Socket ${socket.id} unido a: ${sala}`);
  });

  // 2. Salir de una sala
  socket.on("leave_room", (data) => {
    const sala =
      typeof data === "object"
        ? `${data.tipo_sala || "chat"}_${data.id_sala}`
        : `chat_${data}`;

    socket.leave(sala);
    console.log(`[PioZone Socket] Socket ${socket.id} salió de: ${sala}`);
  });

  // 3. Envío y persistencia de mensajes
  socket.on("send_message", async (data) => {
    const { id_chat, id_usuario, contenido, id_evento } = data;

    if (!contenido || !id_usuario) {
      return socket.emit("error_mensaje", {
        mensaje: "El contenido y el id_usuario son requeridos.",
      });
    }

    try {
      // Inserción en la BD con realizarQuery
      const sqlInsert = ` 
        INSERT INTO Mensajes (contenido, fecha_envio, estado, id_chat, id_usuario) 
        VALUES (?, NOW(), 'enviado', ?, ?)
      `;
      const resultInsert = await realizarQuery(sqlInsert, [
        contenido,
        id_chat || null,
        id_usuario,
      ]);

      // Búsqueda de datos del emisor
      const userSql = `SELECT nombre, apellido FROM Usuarios_tpf WHERE id_usuario = ?`;
      const user = await realizarQuery(userSql, [id_usuario]);
      const usuarioData = user[0] || {};

      const payload = {
        id_mensaje: resultInsert.insertId,
        id_chat: id_chat || null,
        id_evento: id_evento || null,
        id_usuario,
        nombre: usuarioData.nombre || "Usuario",
        apellido: usuarioData.apellido || "",
        contenido,
        estado: "enviado",
        fecha_envio: new Date(),
      };

      // Emitir a sala de evento o sala de chat según el caso
      const targetRoom = id_evento ? `evento_${id_evento}` : `chat_${id_chat}`;
      io.to(targetRoom).emit("receive_message", payload);

    } catch (error) {
      console.error("[PioZone Socket] Error al procesar mensaje:", error);
      socket.emit("error_mensaje", {
        mensaje: "Error al guardar o emitir el mensaje.",
      });
    }
  });

  // 4. Actualización en vivo de eventos/partidos deportivos
  socket.on("actualizar_evento", (data) => {
    const { id_evento, marcador_local, marcador_visitante, estado_evento } = data;

    io.to(`evento_${id_evento}`).emit("evento_actualizado", {
      id_evento,
      marcador_local,
      marcador_visitante,
      estado_evento,
      timestamp: new Date(),
    });
  });

  // 5. Desconexión
  socket.on("disconnect", () => {
    console.log(`[PioZone Socket] Cliente desconectado: ${socket.id}`);
  });
});