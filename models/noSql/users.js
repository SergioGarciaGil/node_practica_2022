const mongoose = require('mongoose')


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
module.exports = mongoose.model("users", UserSchema)