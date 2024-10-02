const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql2/promise');  // Importar la versión promise para usar async/await
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const app = express();
const upload = multer();

// Función para crear la conexión
async function createConnection() {
return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Coloca tu contraseña aquí si es necesario
    database: 'biblioteca',  // Cambia el nombre de la base de datos si es necesario
    });
}

let connection;

// Inicia la conexión y maneja posibles errores
async function startServer() {
try {
    connection = await createConnection();
    console.log('Conexión a la base de datos establecida');

    // Aquí se configura el servidor
    app.use(cors());                                // Middleware de terceros
    app.use(express.json());                        // Middleware incorporado en Express
    app.use(express.text());                        // Middleware para texto
    app.use(express.urlencoded({ extended: true })); // Middleware para parsear un formulario URL en Code
    app.use(upload.none());                         // Middleware para parsear form-data
    app.use(bodyParser.xml());                      // Parseador de XML

    // // Ruta para obtener el usuario por Id_Usuario
    // app.get('/usuario', async (req, res) => {
    //   const idUsuario = req.query.Id_Usuario;  // Obtiene el parámetro de la URL

    // // if (!idUsuario) {
    // //     // return res.status(400).json({ error: 'Id_Usuario es requerido' });
    // //     consulta = 'SELECT * FROM usuarios';
 
    // // }

    //       // Si no se proporciona un ID, obtener todos los usuarios
    //     if (!idUsuario) {
    //         consulta = 'SELECT * FROM usuarios';
    //     } else {
    //         consulta = 'SELECT * FROM usuarios WHERE Id_Usuario = ?';
    //         parametros = [idUsuario];
    //     }

    // try {
    //     const [results, fields] = await connection.execute(
    //       'SELECT * FROM usuarios WHERE Id_Usuario = ?',
    //       [idUsuario]  // Parámetro de la consulta
    //     );

    //     if (results.length > 0) {
    //       return res.json(results[0]);  // Devuelve solo el primer resultado
    //     } else {
    //     return res.status(404).json({ error: 'Usuario no encontrado' });
    //     }
    // } catch (err) {
    //     console.error('Error en la consulta:', err);
    //     return res.status(500).json({ error: 'Error interno del servidor' });
    // }
    // });
     // Ruta para obtener el usuario por Id_Usuario o todos si no se pasa ID
     app.get('/usuario', async (req, res) => {
        const idUsuario = req.query.Id_Usuario;  // Obtiene el parámetro de la URL
   
        let consulta = '';
        let parametros = [];
   
        // Si no se proporciona un ID, obtener todos los usuarios
        if (!idUsuario) {
          consulta = 'SELECT * FROM usuarios';
        } else {
          consulta = 'SELECT * FROM usuarios WHERE Id_Usuario = ?';
          parametros = [idUsuario];
        }
   
        try {
          const [results, fields] = await connection.execute(consulta, parametros);

        if (results.length > 0) {
            return res.json(results);
        } else {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        } catch (err) {
        console.error('Error en la consulta SQL:', err);
        return res.status(500).json({ error: 'Error al ejecutar la consulta en la base de datos' });
        }
    });


    //DELET
    app.delete('/usuario', async (req, res) => {
      const idUsuario = req.query.Id_Usuario;  // Obtiene el parámetro de la URL
    
    if (!idUsuario) {
        return res.status(400).json({ error: 'Id_Usuario es requerido' });
    }

    try {
          // Verificar si el usuario existe antes de eliminar
        const [checkResults] = await connection.execute(
              'SELECT * FROM usuarios WHERE Id_Usuario = ?',
            [idUsuario]
        );

        if (checkResults.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

          // Ejecutar la eliminación del usuario
        const [deleteResults] = await connection.execute(
            'DELETE FROM usuarios WHERE Id_Usuario = ?',
            [idUsuario]
        );

        if (deleteResults.affectedRows > 0) {
            return res.json({ message: 'Usuario eliminado exitosamente' });
        } else {
            return res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

  //POST 
    app.post('/usuario', async (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, correo_electronico, nombre_de_usuario, contraseña, rol } = req.body;  // Obtener los datos enviados en el cuerpo de la solicitud

    // Verificar que se envíen todos los campos requeridos
    if (!nombre || !apellido_paterno || !apellido_materno || !correo_electronico || !nombre_de_usuario || !contraseña || !rol) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
        // Insertar un nuevo usuario en la base de datos
        const [result] = await connection.execute(
            'INSERT INTO usuarios (Nombre, Apellido_Paterno, Apellido_Materno, Correo_Electronico, Nombre_de_Usuario, Contraseña, Rol) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nombre, apellido_paterno, apellido_materno, correo_electronico, nombre_de_usuario, contraseña, rol]
        );

        // Comprobar si la inserción fue exitosa
        if (result.affectedRows > 0) {
            return res.status(201).json({ message: 'Usuario creado exitosamente', id: result.insertId });
        } else {
            return res.status(500).json({ error: 'Error al crear el usuario' });
        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});







    app.listen(3000, () => {
    console.log('Server Express escuchando en puerto 3000');
    });

    } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    }
}

startServer();


//npm i express
//npm i cors
//npm install express body-parser body-parser-xml
//npm install --save mysql2 para conectar con mysql

