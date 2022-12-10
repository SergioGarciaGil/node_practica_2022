
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { createItem } = require('../controllers/storage')
//le decimos a multer que haga uso del disco del almacenamiento


router.post('/', uploadMiddleware.single('myfile'), createItem)//single para enviar un solo archivo y multi para muchos archivos



module.exports = router