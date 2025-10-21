const fs = require('fs/promises')
const path = require('path')
const pool = require('../config/database.js')

async function readSchema() {
    try {
        const rutaArchivo = path.join(__dirname, '../config/schema.sql')
        const db = await fs.readFile(rutaArchivo, 'utf8')

        pool.query(db, (error, results) => {
            if (error) {
                console.log('Error en crear las tablas', error.message)
            } else {
                console.log('✅ Tablas creadas exitosamente!')
                process.exit(0)
            }
        })
    } catch (error) {
        console.log('Error al leer el archivo:', error.message)
    }
}
readSchema()