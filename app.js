const express = require('express');
const bodyParser = require('body-parser');
const connection = require("./db");

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Iniciamos el servidor.
app.listen(port, () => {
    console.log('Servidor iniciado en: http://localhost:' + port);
});

app.get("/", (req, res) => {
    res.send("Hola, ésta es la página principal");
});

app.get("/test/:nombre", (req, res) => {
    const {nombre} = req.params;
    res.send(`Hola, ${nombre}`);
});

app.get("/eventos", async(req, res) => {

    const query = 'SELECT id, nombre, cupo FROM eventos';

    try{
        const [results] = await connection.query(query);
        res.json( {success: true, results: results} );
    }catch(error){
        res.status(500).json( {success: false, message: "Error al intentar recuperar los eventos"} );
    }

});

app.use((req, res, next) => {
    res.status(404);
    res.send(`
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/">Volver a la página de inicio</a>
    `);
});