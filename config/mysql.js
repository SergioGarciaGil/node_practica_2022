const { Sequelize } = require('sequelize');
// const database = process.env.MYSQL_DATABASE
// const username = process.env.MYSQL_USER
// const password = process.env.MYSQL_PASSWORD
// const host = process.env.MYSQL_HOST
const { DB_USER, DB_PASSWORD, DB_DATABASE, host } = process.env

const sequelize = new Sequelize(
    //     DB_USER, DB_PASSWORD, DB_DATABASE, {
    //     host,
    //     dialect: 'postgres',
    // }
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_DATABASE}/${host}`,


)
const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate()
        console.log('POSTGRES Conexion Correcta')
    } catch (error) {
        console.log('POSTGRES ERROR DE CONEXION', error)

    }
}
module.exports = { sequelize, dbConnectMySql }