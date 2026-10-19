var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express(); //Inicializo express
var port = process.env.PORT || 4000; //Ejecuto el servidor en el puerto 4000

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//Pongo el servidor a escuchar
app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
});

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

//2
app.get ('/Club', async function (req,res) {
    const respuesta = await realizarQuery("SELECT * FROM Club");
    console.log(respuesta);
	res.send(respuesta);
})
app.get ('/Jugadores', async function (req,res) {
    const respuesta = await realizarQuery("SELECT * FROM Jugadores");
    console.log(respuesta);
	res.send(respuesta);
})
app.get ('/Socios', async function (req,res) {
    const respuesta = await realizarQuery("SELECT * FROM Socios");
    console.log(respuesta);
	res.send(respuesta);
})
//3
app.get('/Club_id', async function (req, res) {
    const { id } = req.query;
    const respuesta = await realizarQuery(
        "SELECT * FROM Club WHERE club_id = ?", [id]
    );
    console.log(respuesta);
    res.send(respuesta);
});

app.get('/Jugadores_id', async function (req, res) {
    const { id } = req.query;
    const respuesta = await realizarQuery(
        "SELECT * FROM Jugadores WHERE id_jugador = ?", [id]
    );
    console.log(respuesta);
    res.send(respuesta);
});

app.get('/Socios_id', async function (req, res) {
    const { id } = req.query;
    const respuesta = await realizarQuery(
        "SELECT * FROM Socios WHERE id_socios = ?", [id]
    );
    console.log(respuesta);
    res.send(respuesta);
});
//4
app.post('/insertarClub', async function(req,res) {
    console.log(req.body)
await realizarQuery(`INSERT INTO Club (nombre,sede,fecha_de_creacion)
VALUES ('${req.body.nombre}','${req.body.sede}','${req.body.fecha_de_creacion}')`);
    res.send("ok") 
})
app.post('/insertarSocios', async function(req,res) {
    console.log(req.body)
    await realizarQuery(`INSERT INTO Socios (nombre,edad,dni,id_club)
VALUES ('${req.body.nombre}',
${req.body.edad}, ${req.body.dni}, ${req.body.id_club})`);
    res.send("ok") 
})
app.post('/insertarJugadores', async function(req,res) {
    console.log(req.body)
    await realizarQuery(`INSERT INTO Jugadores (deporte, posicion, edad, nombre)
VALUES ('${req.body.deporte}','${req.body.posicion}', ${req.body.edad}, '${req.body.nombre}')`);
    res.send("ok") 
})
//5
app.put('/modificarClub', async function(req,res) {
    console.log(req.body)
    await realizarQuery(`UPDATE Club 
        SET nombre = '${req.body.nombre}', 
            sede = '${req.body.sede}', 
            fecha_de_creacion = '${req.body.fecha_de_creacion}'
        WHERE id_club = '${req.body.id_club}'`
    );
    res.send("ok");
})
app.put('/modificarSocios', async function(req,res) {
    console.log(req.body)
    await realizarQuery(`UPDATE Club 
        SET nombre = '${req.body.nombre}', 
            edad = '${req.body.edad}', 
            dni = '${req.body.dni}
            id_club = '${req.body.id_club}'
        WHERE id_club = '${req.body.id_club}'`
    );
    res.send("ok");
})
app.put('/modificarJugadores', async function(req,res) {
    console.log(req.body)
    await realizarQuery(`UPDATE Club 
        SET deporte = '${req.body.deporte}', 
            posicion = '${req.body.posicion}', 
            edad = '${req.body.edad}'
        WHERE id_jugador = '${req.body.id_jugador}'`
    );
    res.send("ok");
})
//6
app.delete('/eliminarClub', async function (req, res) {
    const { id_club } = req.query;
    const respuesta = await realizarQuery(
        "SELECT * FROM Club WHERE club_id = ?", [id]
    );
    console.log(respuesta);
    res.send(respuesta);
});

app.delete('/Jugadores_id', async function (req, res) {
    const { id } = req.query;
    const respuesta = await realizarQuery(
        "SELECT * FROM Jugadores WHERE id_jugador = ?", [id]
    );
    console.log(respuesta);
    res.send(respuesta);
});

app.delete('/eliminarSocios', async function (req, res) {
    const { id_socios } = req.query;
await realizarQuery(
        "DELETE FROM Socios WHERE id_socios = ?", [id_socios]
    );
    console.log(respuesta);
    console.log("Socio eliminado");
});
//7
app.post('/insertarJugadoresVerificados', async function(req,res) {
    console.log(req.body)
    const estaRep = await realizarQuery(`SELECT * FROM Jugadores WHERE deporte ='${req.body.deporte}' AND posicion = '${req.body.posicion}'AND edad = ${req.body.edad} AND nombre = '${req.body.nombre}'`);
    if (estaRep.length > 0){
        console.log("repetido glorbo");
        res.send("repetido");
    } else {
        await realizarQuery(`INSERT INTO Jugadores (deporte, posicion, edad, nombre)
        VALUES ('${req.body.deporte}','${req.body.posicion}', ${req.body.edad}, '${req.body.nombre}')`);
        res.send("ok");
    }
})
app.post('/insertarSociosVerificados', async function(req,res) {
    console.log(req.body)
    const estaRep = await realizarQuery(`SELECT * FROM Socios WHERE nombre ='${req.body.nombre}' AND edad = ${req.body.edad} AND dni = ${req.body.dni} AND id_club = ${req.body.id_club}`);
    if (estaRep.length > 0){
        console.log("repetido glorbo");
        res.send("repetido");
    } else {
        await realizarQuery(`INSERT INTO Socios (nombre,edad,dni,id_club)
        VALUES ('${req.body.nombre}',
        ${req.body.edad}, ${req.body.dni}, ${req.body.id_club})`);
        res.send("ok") 
    }
})
app.post('/insertarClubVerificados', async function(req,res) {
    console.log(req.body)
    const estaRep = await realizarQuery(`SELECT * FROM Socios WHERE nombre ='${req.body.nombre}' AND sede = '${req.body.sede}' AND fecha_de_creacion = '${req.body.fecha_de_creacion}'`);
    if (estaRep.length > 0){
        console.log("repetido glorbo");
        res.send("repetido");
    } else {
        await realizarQuery(`INSERT INTO Club (nombre,sede,fecha_de_creacion)
        VALUES ('${req.body.nombre}','${req.body.sede}','${req.body.fecha_de_creacion}')`);
        res.send("ok")  
    }
})
