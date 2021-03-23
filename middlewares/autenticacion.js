const SEED = require('../config/config').SEED;
const jwt = require('jsonwebtoken');



// Verificar Token

exports.verificaToken = function(req, res, next) {

    const token = req.body.token;


    jwt.verify(token, SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        req.usuario = decoded;

        next();
    });

}