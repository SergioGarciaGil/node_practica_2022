const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const UserSchema = new mongoose.Schema
    (
        {
            name: {
                type: String,

            }
        },
        {
            age: {
                type: Number
            }
        },
        {
            email: {
                type: String,
                unique: true
            }
        },
        {
            passwords: {
                type: String,
            }
        },
        {
            role: {
                type: ["user", "admin"],
                default: "user"
            }
        },
        {
            timestamps: true,// me va a marcar las fechas de actualizaciuón
            versionKey: false
        }

    )
UserSchema.plugin(mongooseDelete, { overrideMethods: 'all' })//para sobre escribir los metodos que vienen nativos de mongo
module.exports = mongoose.model("users", UserSchema)