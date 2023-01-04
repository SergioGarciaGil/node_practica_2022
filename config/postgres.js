const { Sequelize } = require('sequelize');

// const { DB_USER, DB_PASSWORD, DB_DATABASE, host } = process.env

const database = process.env.DB_DATABASE
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.host
const sequelize = new Sequelize(
    //     username, password, database, {
    //     host,
    //     dialect: 'postgres',
    // }
    `postgres://${username}:${password}@${host}/${database}`,



)
const dbConnectPostgres = async () => {
    try {
        await sequelize.authenticate()
        console.log('POSTGRES Conexion Correcta')
    } catch (error) {
        console.log('POSTGRES ERROR DE CONEXION', error)

    }
}
module.exports = { sequelize, dbConnectPostgres }