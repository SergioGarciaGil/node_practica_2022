const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

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
            versionKey: false,
            timestamps: true,
        }




    )
StorageSchema.plugin(mongooseDelete, { overrideMethods: 'all' })//para sobre escribir los metodos que vienen nativos de mongo
module.exports = mongoose.model("storages", StorageSchema)