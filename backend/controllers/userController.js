const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const saltRounds = 10

        if (password.length < 6)
            return res.status(400).json('La contraseña debe tener \
                                      mínimo 6  caracteres')

        const hashPassword = await bcrypt.hash(password, saltRounds)
        await User.create({ username, email, password: hashPassword })

        res.status(201).json({ message: 'Usuario creado con éxito' })

    } catch (err) {
        res.status(400).json(`Error al crear el usuario: ${err}`)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findByEmail(email)
        const match = await bcrypt.compare(password, user.password)

        if (!user || !match) {
            res.status(400).json({ message: 'Usuario o contraseña incorrectos' })
            return 
        }

        if (match) {
            const payload = {id: user.id, username: user.username}
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '12h'})
            res.status(200).json({message: 'Login correcto', 
                                  username: user.username, 
                                  token: token})
        }
    } catch (err) {
        res.status(400).json(`Error al hacer login: ${err}`)
    }
}

module.exports = { register, login }