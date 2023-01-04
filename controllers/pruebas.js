const { tracksModel } = require('../models')
const { matchedData } = require('express-validator')
const handdleHttpError = require('../utils/handdleError')
const { default: axios } = require('axios')



const getItems = async (req, res) => {


    const auth = req.headers.authorization;
    const config = {
        headers: {

            "Authorization": `Bearer ${auth}`
        }
    }

    const respuesta = await axios.get("http://localhost:3001/api/tracks",
        config
    )
    res.send(respuesta.data)




}
const getItem = async (req, res) => {
    try {
        // req = matchedData(req)
        const { id } = matchedData(req)
        const data = await tracksModel.findById(id)
        res.send({ data })
    } catch (error) {
        handdleHttpError(res, "Error_get_items")
    }
}
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const auth = req.headers.authorization;
        const config = {
            headers: {

                "Authorization": "Bearer " + auth
            }
        }

        const respuesta = await axios.post("http://localhost:3001/api/tracks",
            body,
            config
        )
        res.send(respuesta.data)
    } catch (error) {
        handdleHttpError(res, 'ERROR_CREATE_ITEM')
    }
}
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)//creamos dos objetos id y body
        const data = await tracksModel.findOneAndUpdate(id,
            body, {
            new: true,
        }
        )
        console.log(data)
        res.send({ data })
    } catch (error) {
        handdleHttpError(res, 'ERROR_update_ITEM')
    }
}
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await tracksModel.delete({ _id: id })
        res.send({ data })
    } catch (error) {
        handdleHttpError(res, "Error_get_items")
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}