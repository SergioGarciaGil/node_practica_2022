const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator')

const validatorGetItem = [


    (req, res, next) => {
        return validateResults(req, res, next);
    }

];


module.exports = { validatorGetItem }