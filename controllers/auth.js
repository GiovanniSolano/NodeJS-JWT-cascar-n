const bcrypt = require('bcrypt');
const SEED = require('../config/config').SEED;
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario.model');
const { response } = require('express');



const loginUsuario = async(req, res = response) => {

    const { correo, password } = req.body;

    try {
        const usuarioBD = await Usuario.findOne({ correo });

        if (!usuarioBD) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Correo/Password incorrectos',

            });
        }

        if (!bcrypt.compareSync(password, usuarioBD.password)) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Correo/Password incorrectos',

            });
        }

        // Crear token
        usuarioBD.password = 'estoNoEsElPassword:)';
        const token = jwt.sign({ usuario: usuarioBD }, SEED, { expiresIn: '1h' });


        res.status(200).json({
            ok: true,
            usuario: usuarioBD,
            token,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'No eres admin',
        });


    }


}

module.exports = {
    loginUsuario
};