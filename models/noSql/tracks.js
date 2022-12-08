const mongoose = require('mongoose')


const TracksSchema = new mongoose.Schema
    (
        {
            name: {
                type: String,
            }
        },
        {
            album: {
                type: String,
            }
        },
        {
            cover: {
                type: String,
                validator: (req) => {
                    return true
                },
                message: 'ERROR_URL'
            }
        },
        {
            artist: {
                type: String,
                name: {
                    type: String
                },
                nickname: {
                    type: String,
                },
                nationality: {
                    type: String,
                },

            },
            durations: {
                start: {
                    type: Number
                },
                end: {
                    type: Number
                }
            },
            //VA SER UN STRING CON CIERTATO NUMERO DE CARACTERES O PATRON DE ID
            mediaId: {
                type: mongoose.Types.ObjectId,
            }

        },


        {
            timestamps: true,// me va a marcar las fechas de actualizaciuón
            versionKey: false
        }

    )
module.exports = mongoose.model("tracks", TracksSchema)