const { handdleHttpError } = require('../utils/handdleError');

const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req
        console.log({ user })
        const rolesByUser = user.role
        const checkValuedRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle))
        if (!checkValuedRol) {
            handdleHttpError(res, 'USER_NOT_PERMISSIONS', 403)
        }
        next()
    } catch (error) {
        handdleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
}

module.exports = checkRol