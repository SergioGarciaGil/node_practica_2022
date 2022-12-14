const { storageModel } = require('../models')
const { matchedData } = require('express-validator')
const handdleHttpError = require('../utils/handdleError')

const PUBLIC_URL = process.env.PUBLIC_URL


const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({})
        res.send({ data })
    } catch (error) {
        handdleHttpError(res, 'ERROR_GET_ITEMS')

    }
}
const getItem = async (req, res) => {
    try {

        const { id } = req.params
        const data = await storageModel.findById(id)
        res.send({ data })
    } catch (error) {
        handdleHttpError(res, 'ERROR_GET_ITEM')
    }
}
const createItem = async (req, res) => {
    const { file } = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)

    res.send({ data })
}
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = req.params
        const data = await storageModel.findOneAndUpdate(id, body, {
            new: true,
        })
        res.send({ data })
    } catch (error) {
        handdleHttpError(res, 'ERROR_UPDATE_ITEM')
    }
}
const deleteItem = () => { }

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}