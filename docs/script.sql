CREATE TABLE Deportes (
    id_deporte INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descrpcion VARCHAR(50) NOT NULL,
    es_equipo BOOLEAN NOT NULL
);

CREATE TABLE Competencias (
    id_competencia INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descrpcion VARCHAR(50) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    id_deporte INT NOT NULL,
    FOREIGN KEY (id_deporte) REFERENCES Deportes(id_deporte)
);

CREATE TABLE Equipos (
    id_equipo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    logo_url VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    cant_jugadores INT,
	id_competencia INT NOT NULL,
	id_deporte INT NOT NULL,
    FOREIGN KEY (id_competencia) REFERENCES Competencias(id_competencia),
    FOREIGN KEY (id_deporte) REFERENCES Deportes(id_deporte)
);

CREATE TABLE Equipos_Competencias (
    id_equipo_competencia INT AUTO_INCREMENT PRIMARY KEY,
    posicion VARCHAR(100) NOT NULL,
    id_competencia INT NOT NULL,
    id_equipo INT NOT NULL,
    FOREIGN KEY (id_competencia) REFERENCES Competencias(id_competencia),
    FOREIGN KEY (id_equipo) REFERENCES Equipos(id_equipo)
);

CREATE TABLE Partidos (
    id_partido INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    lugar VARCHAR(100) NOT NULL,
    resultado INT NOT NULL,
    id_competencia INT NOT NULL,
    id_equipo_local INT NOT NULL,
    id_equipo_visitante INT NOT NULL
);

CREATE TABLE Jugadores (
    id_jugadores INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    nacionalidad VARCHAR(100) NOT NULL,
    posicion INT NOT NULL,
    imagen_url VARCHAR(100) NOT NULL,
    id_equipo INT NOT NULL,
    FOREIGN KEY (id_equipo) REFERENCES Equipos(id_equipo)
);

CREATE TABLE Usuarios_tpf (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contraseña INT NOT NULL,
    es_admin BOOLEAN NOT NULL
);
