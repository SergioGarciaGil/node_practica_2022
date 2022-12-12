const express = require('express');
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const { getItems, getItem, createItem } = require('../controllers/tracks')
router.get('/', getItems)
router.get("/:id", validatorGetItem, getItem)
router.post("/", validatorCreateItem, createItem)

module.exports = router