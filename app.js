require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Iniciamos el servidor.
app.listen(port, () => {
    console.log('Servidor iniciado en: http://localhost:' + port);
});

app.use(require('./src/routes/eventoRoutes'));

app.use((req, res, next) => {
    res.status(404);
    res.send(`
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/">Volver a la página de inicio</a>
    `);
});