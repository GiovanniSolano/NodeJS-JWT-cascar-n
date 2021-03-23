/*
    Ruta: /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();


const { loginUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post('/', [


    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos

], loginUsuario);


module.exports = router;