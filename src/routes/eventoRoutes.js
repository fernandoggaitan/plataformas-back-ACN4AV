const express = require('express');
const router = express.Router();

//Controlador
const eventoController = require('../controllers/eventoController');

router.get('/eventos', eventoController.index);
router.get('/eventos/:ID', eventoController.show);

module.exports = router;