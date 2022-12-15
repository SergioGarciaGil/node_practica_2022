
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');
//le decimos a multer que haga uso del disco del almacenamiento



router.get('/', getItems)

router.get('/:id', validatorGetItem, getItem)
router.post('/', uploadMiddleware.single('myfile'), createItem)//single para enviar un solo archivo y multi para muchos archivos
router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router