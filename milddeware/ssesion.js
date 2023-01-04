const { usersModel } = require('../models')
const { handdleHttpError } = require('../utils/handdleError')
const { verifyToken } = require('../utils/handdleJwt')
const getProperties = require('../utils/handdlePropertiesEngine')
const propertiesKey = getProperties()

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handdleHttpError(res, "NOT_TOKEN", 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)
        if (!dataToken) {
            handdleHttpError(res, "NO_PAYLOAD_DATA", 401)
        }

        // if (!dataToken._id) {
        //     handdleHttpError(res, "ERROR_ID_TOKEN", 401)
        // }
        const query = {
            [propertiesKey.id]: dataToken[propertiesKey.id],
        }
        const user = await usersModel.findOne(query) //findById es muy ligado a mongo por eso lo cambiamos por findOne que sirve para ambose
        req.user = user
        next()
    } catch (error) {
        handdleHttpError(res, 'NO_SESSION', 401)
    }
}
module.exports = authMiddleware