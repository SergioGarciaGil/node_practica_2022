const express = require('express');
const router = express.Router();
const { matchedData } = require('express-validator')

const { validatorRegister, validatorLogin } = require('../validators/auth')

router.post('/register', validatorRegister, (req, res) => {
    req = matchedData(req)

    res.send({ data: req })
})
module.exports = router