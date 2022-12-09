const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname // Nos va a dar la ruta absoluta donde se encuentra este archivo

const removeExtension = (fileName) => {
    //Todo tracks.js, [tracks, js]
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if (name !== 'index') {
        console.log('cargando ruta ' + name)
        router.use(`/${name}`, require(`./${file}`))
    }


})//va a leer el directorio de forma asyncrona (index y tracks)



module.exports = router