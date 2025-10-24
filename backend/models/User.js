const pool = require('../config/database.js')
// metodos create(), findByUsername(), update()
class User {
    static async create(userData) {
        const { username, email, password } = userData
        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'
        const values = [username, email, password]

        return new Promise((resolve, reject) => {
            pool.query(sql, values, (error, results) => {
                error ? reject(error) : resolve({
                    id: results.insertId,
                    username,
                    email
                })
            })
        })
    }

    static async findByUsername(username) {
        const sql = 'SELECT * FROM users WHERE username = ?'
        const value = [username]

        return new Promise((resolve, reject) => {
            pool.query(sql, value, (error, results) => {
                error ? reject(error) : resolve(results[0] || null)
            })
        })
    }

    static async update(userID, username) {
        const sql = 'UPDATE users SET username = ? WHERE id = ?'
        const values = [username, userID]

        return new Promise((resolve, reject) => {
            pool.query(sql, values, (error, results) => {
                error ? reject(error) : resolve({success: true, message: 'Usuario actualizado correctamente'})
            })
        })
    }
}

module.exports = User