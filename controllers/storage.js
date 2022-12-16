const fs = require('fs');
const { storageModel } = require('../models')
const { matchedData } = require('express-validator')
const handdleHttpError = require('../utils/handdleError')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

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

const deleteItem = async (req, res, next) => {
    try {

        const { id } = req.params
        const dataFile = await storageModel.findById(id)

        await storageModel.delete({ _id: id })
        if (!dataFile) {
            res.send({ message: `Storage con ${id} no existe` })
            return next()
        }

        res.send(dataFile)


        const { filename } = dataFile
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath)//le digo que elimine lo que esta en ese registro

        const data = {
            filePath,
            deleted: 1
        }
        res.send({ data })
    } catch (error) {

        handdleHttpError(res, 'ERROR_GET_DELETE')
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem
}