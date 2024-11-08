const usuarioModel = require("../models/usuarioModel");

exports.register = async(req, res) => {
    const {nombre, email, contrasena} = req.body;
    const is_admin = false;
    try{
        await usuarioModel.create( {nombre, email, contrasena, is_admin} );
        res.json({ success: true, message: 'Usuario registrado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar registrar al usuario' });
    }
}

exports.login = async(req, res) => {
    const {email, contrasena} = req.body;
    try{
        const usuario = await usuarioModel.login( {email, contrasena} );
        if(usuario == null){
            res.json({ success: false, message: 'Credenciales incorrectas' });
        }else{
            res.json({
                success: true,
                message: 'Inicio de sesión exitoso',
                nombre: usuario.nombre,
                ID: usuario.id
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar iniciar sesión' });
    }
}
