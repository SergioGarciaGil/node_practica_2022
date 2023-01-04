const { sequelize } = require('../../config/postgres')
const { DataTypes } = require("sequelize")
const Storage = sequelize.define(
    'storage',
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filname: {
            type: DataTypes.STRING
        },
        timestamps: true
    })

module.exports = Storage