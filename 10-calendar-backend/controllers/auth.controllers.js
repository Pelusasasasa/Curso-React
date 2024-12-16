const { validationResult } = require("express-validator");
const Usuario = require('../models/Usuario');

const userCTRL = {};

userCTRL.crearUsuario = async(req,res) => {

    try {
        const {name, email, password} = req.body;

        let usuario = await Usuario.findOne({email});

        if (usuario){
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correro'
            })
        };

        usuario = new Usuario( req.body );

        await usuario.save();

        const errors = validationResult( req );

        res.status(201).json({
            ok: true,
            name,
            email,
            
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

};

userCTRL.loginUsuario = (req, res) => {

    const {email, password} = req.body;

   

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    });

};

userCTRL.revalidarToken = (req, res) => {
    (req,res) => {
        res.json({
            ok: true,
            msg: 'renew'
        })
    }
};


module.exports = userCTRL;