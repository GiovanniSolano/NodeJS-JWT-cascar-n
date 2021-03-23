const { response } = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.model');



const usuarioRegistro = async(req, res = response) => {

    const body = req.body;
    const nuevoUsuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        correo: body.correo,
        password: bcrypt.hashSync(body.password, 10)
    });

    try {

        const existeUsuario = await Usuario.findOne({ correo: nuevoUsuario.correo });

        if (existeUsuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            });
        }

        const usuarioNuevo = new Usuario(nuevoUsuario);

        await usuarioNuevo.save();


        res.json({
            ok: true,
            usuarioNuevo
        });



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error,
            message: 'Ocurrió un error al guardar el usuario'
        });

    }
}

const getUsuarios = async(req, res = response) => {

    try {
        const usuarios = await Usuario.find();

        res.json({
            ok: true,
            usuarios
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }


}






module.exports = {
    usuarioRegistro,
    getUsuarios
};