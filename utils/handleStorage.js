const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`//le decimos que en archivo que estoy ubicado va a ir ve hacia atars una carpeta
        cb(null, pathStorage)//pasamos null error y destination pathStorage
    },
    //mi-cv, pdf,mi-foto.png, mi video.mp4
    filename: function (req, file, cb) {
        const ext = file.originalname.split(".").pop()//pop solo agarra el ultimo valor
        const filename = `file-${Date.now()}.${ext}`//para generar nobres aleatorios 
        cb(null, filename)
    }
})

const uploadMiddleware = multer({
    storage,
});
module.exports = uploadMiddleware