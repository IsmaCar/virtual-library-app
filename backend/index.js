const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

//Config dotenv
dotenv.config()
const PORT = process.env.PORT ||5000

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`)
});