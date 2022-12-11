
const { validationResult } = require('express-validator')


const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();//valida las cosas que se esta enviando por la peticion y si no cumple retorna un error
        return next();//si no existe error continua hacia el controlador
    } catch (err) {
        res.status(403)
        res.send({ errors: err.array() });
    }
}
module.exports = validateResults