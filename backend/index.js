//STANDARD
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { Server } = require("socket.io");
const { realizarQuery } = require("./modulos/mysql");
//IMG
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(express.json());

// ---------- Subida de imágenes ----------

const carpetaUploads = path.join(__dirname, "uploads");
if (!fs.existsSync(carpetaUploads)) {
  fs.mkdirSync(carpetaUploads);
}

// Sirve las imágenes en http://localhost:4000/uploads/<archivo>
app.use("/uploads", express.static(carpetaUploads));

const almacenamiento = multer.diskStorage({
  destination: (req, file, cb) => cb(null, carpetaUploads),
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e6)}${extension}`);
  },
});

const upload = multer({
  storage: almacenamiento,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
  fileFilter: (req, file, cb) => {
    const permitidos = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];
    if (permitidos.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Solo se permiten imágenes JPG, PNG, WEBP o SVG"));
    }
  },
});

// Devuelve:
//  - ruta: la que se guarda en la base (corta, entra en logo_url VARCHAR(50))
//  - url:  la dirección completa para mostrarla en el navegador
app.post("/upload", (req, res) => {
  upload.single("imagen")(req, res, (error) => {
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No se recibió ninguna imagen" });
    }
    const ruta = `/uploads/${req.file.filename}`;
    res.json({ ruta, url: `http://localhost:${PORT}${ruta}` });
  });
});

//END

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

app.get("/partidos", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Partidos");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/equipos_competencias", async (req, res) => {
  try {
    const result = await realizarQuery("SELECT * FROM Equipos_Competencias");
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
    const sql = "SELECT * FROM Jugadores WHERE id_jugadores = ?";
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

app.get("/partidos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Partidos WHERE id_partido = ?";
    const result = await realizarQuery(sql, [id]);
    res.json(result[0] || null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/equipos_competencias/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM Equipos_Competencias WHERE id_equipo_competencia = ?";
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

//POST POST POST POST POST POST POST POST POST POST POST POST

app.post("/deportes", async (req, res) => {
  try {
    const { nombre, descrpcion, es_equipo } = req.body;
    const sql = "INSERT INTO Deportes (nombre, descrpcion, es_equipo) VALUES (?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, descrpcion, es_equipo]);
    res.json({ id_deporte: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/equipos", async (req, res) => {
  try {
    const { nombre, logo_url, descripcion, cant_jugadores, id_deporte } = req.body;
    const sql = "INSERT INTO Equipos (nombre, logo_url, descripcion, cant_jugadores, id_deporte) VALUES (?, ?, ?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, logo_url, descripcion, cant_jugadores ?? null, id_deporte]);
    res.json({ id_equipo: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/jugadores", async (req, res) => {
  try {
    const { nombre, apellido, fecha_nacimiento, nacionalidad, posicion, imagen_url, id_equipo } = req.body;
    const sql = "INSERT INTO Jugadores (nombre, apellido, fecha_nacimiento, nacionalidad, posicion, imagen_url, id_equipo) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, apellido, fecha_nacimiento, nacionalidad, posicion, imagen_url, id_equipo]);
    res.json({ id_jugadores: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/competencias", async (req, res) => {
  try {
    const { nombre, descrpcion, fecha_inicio, fecha_fin, id_deporte } = req.body;
    const sql = "INSERT INTO Competencias (nombre, descrpcion, fecha_inicio, fecha_fin, id_deporte) VALUES (?, ?, ?, ?, ?)";
    const result = await realizarQuery(sql, [nombre, descrpcion, fecha_inicio, fecha_fin, id_deporte]);
    res.json({ id_competencia: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/partidos", async (req, res) => {
  try {
    const { fecha, hora, lugar, resultado, id_competencia, id_equipo_local, id_equipo_visitante } = req.body;
    const sql = "INSERT INTO Partidos (fecha, hora, lugar, resultado, id_competencia, id_equipo_local, id_equipo_visitante) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const result = await realizarQuery(sql, [fecha, hora, lugar, resultado, id_competencia, id_equipo_local, id_equipo_visitante]);
    res.json({ id_partido: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/equipos_competencias", async (req, res) => {
  try {
    const { posicion, id_competencia, id_equipo } = req.body;
    const sql = "INSERT INTO Equipos_Competencias (posicion, id_competencia, id_equipo) VALUES (?, ?, ?)";
    const result = await realizarQuery(sql, [posicion, id_competencia, id_equipo]);
    res.json({ id_equipo_competencia: result.insertId, ...req.body });
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

// PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT

// PUT para la actualización de registros en cada tabla

app.put("/deportes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descrpcion, es_equipo } = req.body;
    const sql = "UPDATE Deportes SET nombre = ?, descrpcion = ?, es_equipo = ? WHERE id_deporte = ?";
    await realizarQuery(sql, [nombre, descrpcion, es_equipo, id]);
    res.json({ id_deporte: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/equipos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, logo_url, descripcion, cant_jugadores } = req.body;
    const sql = "UPDATE Equipos SET nombre = ?, logo_url = ?, descripcion = ?, cant_jugadores = ? WHERE id_equipo = ?";
    await realizarQuery(sql, [nombre, logo_url, descripcion, cant_jugadores ?? null, id]);
    res.json({ id_equipo: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/jugadores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, fecha_nacimiento, nacionalidad, posicion, imagen_url, id_equipo } = req.body;
    const sql = "UPDATE Jugadores SET nombre = ?, apellido = ?, fecha_nacimiento = ?, nacionalidad = ?, posicion = ?, imagen_url = ?, id_equipo = ? WHERE id_jugadores = ?";
    await realizarQuery(sql, [nombre, apellido, fecha_nacimiento, nacionalidad, posicion, imagen_url, id_equipo, id]);
    res.json({ id_jugadores: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/competencias/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descrpcion, fecha_inicio, fecha_fin, id_deporte } = req.body;
    const sql = "UPDATE Competencias SET nombre = ?, descrpcion = ?, fecha_inicio = ?, fecha_fin = ?, id_deporte = ? WHERE id_competencia = ?";
    await realizarQuery(sql, [nombre, descrpcion, fecha_inicio, fecha_fin, id_deporte, id]);
    res.json({ id_competencia: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/partidos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, hora, lugar, resultado, id_competencia, id_equipo_local, id_equipo_visitante } = req.body;
    const sql = "UPDATE Partidos SET fecha = ?, hora = ?, lugar = ?, resultado = ?, id_competencia = ?, id_equipo_local = ?, id_equipo_visitante = ? WHERE id_partido = ?";
    await realizarQuery(sql, [fecha, hora, lugar, resultado, id_competencia, id_equipo_local, id_equipo_visitante, id]);
    res.json({ id_partido: id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/equipos_competencias/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { posicion, id_competencia, id_equipo } = req.body;
    const sql = "UPDATE Equipos_Competencias SET posicion = ?, id_competencia = ?, id_equipo = ? WHERE id_equipo_competencia = ?";
    await realizarQuery(sql, [posicion, id_competencia, id_equipo, id]);
    res.json({ id_equipo_competencia: id, ...req.body });
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
    const sql = "DELETE FROM Jugadores WHERE id_jugadores = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Jugador eliminado", id_jugadores: id });
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

app.delete("/partidos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Partidos WHERE id_partido = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Partido eliminado", id_partido: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/equipos_competencias/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM Equipos_Competencias WHERE id_equipo_competencia = ?";
    await realizarQuery(sql, [id]);
    res.json({ mensaje: "Inscripción eliminada", id_equipo_competencia: id });
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


// Eventos de WebSockets
io.on("connection", (socket) => {
  console.log(`[PioZone Socket] Cliente conectado: ${socket.id}`);

  // 1. Unirse a salas (Soporta id directo o estructura con tipo_sala, ej: { tipo_sala: "partido", id_sala: 3 })
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

  // 3. Mensajes en vivo (no se guardan: la base no tiene tabla de mensajes)
  socket.on("send_message", async (data) => {
    const { id_chat, id_usuario, contenido, id_partido } = data;

    if (!contenido || !id_usuario) {
      return socket.emit("error_mensaje", {
        mensaje: "El contenido y el id_usuario son requeridos.",
      });
    }

    try {
      // Búsqueda de datos del emisor
      const userSql = "SELECT nombre, apellido FROM Usuarios_tpf WHERE id_usuario = ?";
      const user = await realizarQuery(userSql, [id_usuario]);
      const usuarioData = user[0] || {};

      const payload = {
        id_chat: id_chat || null,
        id_partido: id_partido || null,
        id_usuario,
        nombre: usuarioData.nombre || "Usuario",
        apellido: usuarioData.apellido || "",
        contenido,
        fecha_envio: new Date(),
      };

      // Emitir a la sala del partido o a la sala de chat según el caso
      const targetRoom = id_partido ? `partido_${id_partido}` : `chat_${id_chat}`;
      io.to(targetRoom).emit("receive_message", payload);
    } catch (error) {
      console.error("[PioZone Socket] Error al procesar mensaje:", error);
      socket.emit("error_mensaje", {
        mensaje: "Error al emitir el mensaje.",
      });
    }
  });

  // 4. Actualización en vivo de partidos
  socket.on("actualizar_partido", async (data) => {
      const { id_partido, resultado } = data;

      try {
        const sql = "UPDATE Partidos SET resultado = ? WHERE id_partido = ?";
        await realizarQuery(sql, [resultado, id_partido]);

        io.to(`partido_${id_partido}`).emit("partido_actualizado", {
          id_partido,
          resultado,
          timestamp: new Date(),
        });
      } catch (error) {
        console.error("[PioZone Socket] Error al actualizar partido:", error);
        socket.emit("error_mensaje", {
          mensaje: "Error al actualizar el partido.",
        });
      }
    });

  // 5. Desconexión
  socket.on("disconnect", () => {
    console.log(`[PioZone Socket] Cliente desconectado: ${socket.id}`);
  });
});
