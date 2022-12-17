const express = require('express');
const { matchedData } = require('express-validator')
const { encrypt, compare } = require('../utils/handdlePassword')
const { usersModel } = require('../models')
const router = express.Router();

const { validatorRegister, validatorLogin } = require('../validators/auth')

router.post('/register', validatorRegister, async (req, res) => {
    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = { ...req, password }//aqui estamos creando un objeto nuevo(..req) y la sobre escribimos con la propiedad pasword
    const data = await usersModel.create(body)
    data.set('password', undefined), {
        strict: false
    }//quiero setear la propiedad password con undefined y que no se atan estricto (en model users agregamos select false para esta propiedad)
    res.send({ data })
})
module.exports = router