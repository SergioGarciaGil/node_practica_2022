const express = require('express');
const router = express.Router();
const authMiddleware = require('../milddeware/ssesion')
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const checkRol = require('../milddeware/rol');
router.get('/', authMiddleware, validatorGetItem, getItems)
router.get("/:id", authMiddleware, validatorGetItem, getItem)
router.post("/", authMiddleware, validatorCreateItem, createItem)
router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)

module.exports = router