const { tracksModel } = require('../models')
const { matchedData } = require('express-validator')
const handdleHttpError = require('../utils/handdleError')


const getItems = async (req, res) => {

    try {
        const data = await tracksModel.find({})
        res.send({ data })
    } catch (error) {
        handdleHttpError(res, 'ERROR_GET_ITEMS')
    }


}
const getItem = (req, res) => {

}
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)//express con esta funcion hace cumplir la funcion del validator y no deja ingresar un valor diferente
        const data = await tracksModel.create(body)

        res.send({ body, data })
    } catch (error) {
        handdleHttpError(res, 'ERROR_CREATE_ITEM')
    }
}
const updateItem = () => { }
const deleteItem = () => { }

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}