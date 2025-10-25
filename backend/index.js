const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./routes/userRouter.js')

//Config dotenv
dotenv.config()
const PORT = process.env.PORT ||5000

const app = express();

app.use(cors())
app.use(express.json())

app.use('api/users', router)
app.get('/', (req, res) => {
    res.send('Backend responde')
})

app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`)
});