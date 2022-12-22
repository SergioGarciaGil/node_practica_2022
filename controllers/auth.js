const { matchedData } = require('express-validator')
const { encrypt, compare } = require('../utils/handdlePassword')
const { tokenSign } = require('../utils/handdleJwt')
const { usersModel } = require('../models')
const { handdleHttpError } = require('../utils/handdleError')

const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await usersModel.create(body)
        dataUser.set('password', undefined, { strict: false })

        const data = {
            token: tokenSign(dataUser),
            user: dataUser
        }
        console.log(body)
        res.send({ data })
    } catch (error) {

        handdleHttpError(res, 'ERROR_REGISTER_USER', 404)
    }
}

const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await usersModel.findOne({ email: req.email })
            .select('password name email ')
        if (!user) {
            handdleHttpError(res, "USER_NOT_EXIST", 404)
            return

        }

        const hashPassword = user.password
        console.log({ hashPassword })
        const check = await compare(req.password, hashPassword)

        if (!check) {
            handdleHttpError(res, "PASSWORD_INVALID", 401)
            return
        }

        user.set('password', undefined, { strict: false })
        const data = {
            token: tokenSign(user),
            user
        }
        console.log({ data })
        res.send({ data })
    } catch (error) {

        handdleHttpError(res, 'ERROR_LOGIN_USER', 401)
    }
}
module.exports = { registerCtrl, loginCtrl }