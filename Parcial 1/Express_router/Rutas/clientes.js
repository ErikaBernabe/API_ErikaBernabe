const express = require('express');
const mysql = require('mysql2/promise');

const router = express.Router(); // Declara el Router

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        // Crea la conexión a la base de datos
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '', // Añade tu contraseña aquí si es necesario
            database: 'biblioteca'
        });

        // Consulta a la base de datos para obtener todos los usuarios
        const [rows] = await connection.execute('SELECT * FROM usuarios');
        await connection.end(); // Cierra la conexión después de la consulta

        // Devuelve los resultados en formato JSON
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Ruta para obtener un usuario por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;  // Captura el parámetro de la URL
    try {
        // Crea la conexión a la base de datos
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '', // Añade tu contraseña aquí si es necesario
            database: 'biblioteca'
        });

        // Consulta a la base de datos para obtener el usuario con el ID proporcionado
        const [rows] = await connection.execute('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
        await connection.end();  // Cierra la conexión después de la consulta

        // Verifica si se encontró el usuario
        if (rows.length === 0) {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        } else {
            res.json(rows);
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

module.exports.router = router; // Exporta el router para usarlo en index.js

// // clientes.js
// const express = require('express');
// const mysql = require('mysql2/promise');
 
// const router = express.Router(); // Declara el Router
 
// // // Crea la conexión a la base de datos
// // const connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   database: 'biblioteca'
// // });
 
// // Ruta para obtener todos los clientes
// router.get('/', async (req, res) => {
//     let sentenciaSql = 'SELECT * FROM usuarios';
//     const connection = await mysql.createConnection({host:'localhost', user: 'root',database: 'biblioteca'})

//     const [rows, fields] = await connection.execute(sentenciaSql);
//     res.json(rows);
// });

// // Ruta para obtener un cliente por ID
// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const connection = await mysql.createConnection({host:'localhost', user: 'root',database: 'biblioteca'})
//     const [rows, fields] = await connection.execute('SELECT * FROM usuarios WHERE id_cliente = ?', [id]);
//     if (rows.length === 0) {
//         res.json({ registros: 'No se encontró cliente' });
//     } else {
//         res.json(rows);
//     }
// });

// module.exports.router = router; // Exporta el router para usarlo en index.js
//npm i express
//npm i cors
//npm install express body-parser body-parser-xml
//npm install --save mysql2 para conectar con mysql

