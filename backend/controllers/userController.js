const User = require('../models/User.js')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const saltRounds = 10

        if(password.length < 6)
         return res.status(400).json('La contraseña debe tener \
                                      mínimo 6  caracteres')

        const hashPassword =  await bcrypt.hash(password, saltRounds)
        await User.create({ username, email, password: hashPassword })

        res.status(201).json({message: 'Usuario creado con éxito'})

    } catch (err) {
        res.status(400).json(`Error al crear el usuario: ${err}`)
    }
}

module.exports = {register}