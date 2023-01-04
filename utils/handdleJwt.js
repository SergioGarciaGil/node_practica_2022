const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const getProperties = require('./handdlePropertiesEngine')
const propertiesKey = getProperties()
//debe pasar el objeto usuario
const tokenSign = (user) => {//aqui guardamos el objeto del usuario para sacarlo de la BD
    //vamos a firmar
    const sign = jwt.sign(
        // {
        //     _id: user._id,
        //     role: user.role
        // },

        //AQUI LO VOLVEMOS DINAMICO
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role
        },
        //lo pasamos como segundo argumento
        JWT_SECRET,
        {
            expiresIn: "5h"
        }
    )
    return sign
}

const verifyToken = async (tokenJwt) => {//le indicamos que queremos recibir el token Jwt
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = { tokenSign, verifyToken }