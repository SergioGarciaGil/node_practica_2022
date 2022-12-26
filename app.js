require("dotenv").config()
const express = require('express')
const cors = require('cors')
const morganBody = require('morgan-body')
const app = express()
const dbConnect = require('./config/mongo')


app.use(cors())
app.use(express.json())
app.use(express.static("storage"))//oye los recursos publicos quiero que lo saques de la caperta que se llama stORAGE PARA PODERLA VER EN EL NAVEGADOR
morganBody(app, {
    noColors: true,
})

const port = process.env.PORT || 3000

// Aqui invocamos las rutas

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Tu app esta lista por tu http://localhost:${port}`)
})

dbConnect()