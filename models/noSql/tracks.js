const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-Delete')

const TracksSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        album: {
            type: String,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
TracksSchema.plugin(mongooseDelete, { overrideMethods: 'all' })//para sobre escribir los metodos que vienen nativos de mongo
module.exports = mongoose.model("tracks", TracksSchema)