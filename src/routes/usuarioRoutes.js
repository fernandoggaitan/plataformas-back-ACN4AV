const express = require('express');
const router = express.Router();

//Controlador
const usuarioController = require("../controllers/usuarioController");

//Middleware de autenticación
const { requireAuth } = require("../middlewares/auth");

router.post('/register', usuarioController.register);
router.post('/login', usuarioController.login);
router.get('/welcome', requireAuth, usuarioController.welcome);
router.get('/refresh-token', usuarioController.refreshToken);

module.exports = router;