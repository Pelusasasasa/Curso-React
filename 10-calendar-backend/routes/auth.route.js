const {Router} = require('express');
const { check } = require('express-validator');

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

// host + /api/auth
const router = Router();



router.post(
    '/new',
    [// middlewares
        check('name', 'El nombre es Obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('name', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    crearUsuario);

router.post(
    '/',
    [// middlewares
        check('email', 'El email es Obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', validarJWT, revalidarToken);


module.exports = router;