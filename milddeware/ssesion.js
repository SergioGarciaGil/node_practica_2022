const { handdleHttpError } = require('../utils/handdleError')

const authMiddleware = (req, res, next) => {
    try {

    } catch (error) {
        handdleHttpError(res, 'NO_SESSION', 401)
    }
}
module.exports = authMiddleware