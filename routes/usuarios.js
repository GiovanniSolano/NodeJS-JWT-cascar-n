/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const router = Router();
const middleware = require('../middlewares/autenticacion').verificaToken;
const { check } = require('express-validator');
const { getUsuarios, usuarioRegistro } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('correo', 'El correo es obligatorio').not().isEmpty(),
        check('correo', 'ingresa un correo válido').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    usuarioRegistro);

router.get('/', [middleware], getUsuarios);

module.exports = router;