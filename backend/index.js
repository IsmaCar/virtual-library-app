const express = require('express')
const dotenv = require('dotenv')

//Config dotenv
dotenv.config()
const PORT = process.env.PORT ||3000

const app = express();

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`)
});