INSERT INTO Deportes (nombre, descrpcion, es_equipo)
 VALUES ('Futbol', 'Deporte con pelota', TRUE),
('Basquetbol', 'Deporte de canasta', TRUE),
('Tenis', 'Deporte de raqueta', FALSE),
('Voleibol', 'Deporte de red', TRUE);

INSERT INTO Competencias (nombre, descrpcion, fecha_inicio, fecha_fin, id_deporte)
VALUES ('Liga Profesional', 'Liga argentina de futbol', '2026-02-01', '2026-12-15', 1),
('Copa Argentina', 'Copa nacional de futbol', '2026-03-01', '2026-11-30', 1),
('NBA', 'Liga estadounidense de basquet', '2026-10-20', '2027-06-30', 2),
('Liga Nacional de Basquet', 'Liga argentina de basquet', '2026-10-01', '2027-05-30', 2);

INSERT INTO Equipos (nombre, logo_url, descripcion, cant_jugadores, id_deporte, id_competencia)
VALUES ('Boca Juniors', 'boca.png', 'Club de futbol argentino', 11, 1, 1),
('River Plate', 'river.png', 'Club de futbol argentino', 11, 1, 1),
('Los Angeles Lakers', 'lakers.png', 'Equipo de basquetbol estadounidense', 5, 2, 3),
('Boston Celtics', 'celtics.png', 'Equipo de basquetbol estadounidense', 5, 2, 3);

INSERT INTO Equipos_Competencias (posicion, id_competencia, id_equipo)
VALUES ('1', 1, 1),
('2', 1, 2),
('1', 3, 3),
('2', 3, 4);

INSERT INTO Partidos (fecha, hora, lugar, resultado, id_competencia, id_equipo_local, id_equipo_visitante)
VALUES ('2026-11-01', '17:00:00', 'La Bombonera', 2, 1, 1, 2),
('2026-11-05', '20:00:00', 'Estadio Monumental', 1, 2, 2, 1),
('2026-11-10', '21:30:00', 'Crypto.com Arena', 3, 3, 3, 4),
('2026-11-15', '19:00:00', 'TD Garden', 2, 4, 4, 3);

INSERT INTO Jugadores (nombre, apellido, fecha_nacimiento, nacionalidad, posicion, imagen_url, id_equipo)
VALUES ('Juan', 'Perez', '2000-05-15', 'Argentina', 1, 'juan_perez.jpg', 1),
('Martin', 'Gonzalez', '1999-08-20', 'Argentina', 2, 'martin_gonzalez.jpg', 2),
('LeBron', 'James', '1984-12-30', 'Estados Unidos', 3, 'lebron_james.jpg', 3),
('Jayson', 'Tatum', '1998-03-03', 'Estados Unidos', 4, 'jayson_tatum.jpg', 4);

INSERT INTO Usuarios_tpf (nombre, apellido, email, contraseña, es_admin)
VALUES ('Carlos', 'Rodriguez', 'carlos@gmail.com', 123456, FALSE),
('Maria', 'Lopez', 'maria@gmail.com', 234567, FALSE),
('Santiago', 'Fernandez', 'santiago@gmail.com', 345678, TRUE),
('Lucia', 'Martinez', 'lucia@gmail.com', 456789, FALSE);