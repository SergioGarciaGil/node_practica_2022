const { usersModel } = require('../models')
const { handdleHttpError } = require('../utils/handdleError')
const { verifyToken } = require('../utils/handdleJwt')


const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handdleHttpError(res, "NOT_TOKEN", 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)
        if (!dataToken._id) {
            handdleHttpError(res, "ERROR_ID_TOKEN", 401)
        }
        const user = await usersModel.findById(dataToken._id)
        req.user = user
        next()
    } catch (error) {
        handdleHttpError(res, 'NO_SESSION', 401)
    }
}
module.exports = authMiddleware