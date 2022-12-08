const mongoose = require('mongoose')


const StorageSchema = new mongoose.Schema
    (
        {
            url: {
                type: 'string',
            }
        },
        {
            filename: {
                type: String
            }
        },

        {
            timestamps: true,// me va a marcar las fechas de actualizaciuón
            versionKey: false
        }

    )
module.exports = mongoose.model("storages", StorageSchema)