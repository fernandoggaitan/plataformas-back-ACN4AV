const express = require('express');
const router = express.Router();

//Controlador
const eventoController = require('../controllers/eventoController');

//Create Read Update Delete

//Verbos HTTP
/* 
    GET -> Obtener recursos
    POST -> Crear recurso
    PUT / PATCH -> Modificar recurso
    DELETE -> Eliminar
*/

router.get('/eventos', eventoController.index);
router.post('/eventos', eventoController.store);


router.get('/eventos/:ID', eventoController.show);
router.put('/eventos/:ID', eventoController.update);

module.exports = router;