const express = require('express');
const cors = require('cors');
const multer = require('multer');
const clientes = require('./Rutas/clientes.js'); // Asegúrate de que la ruta esté correcta
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const app = express();
const upload = multer();

app.use(cors());                                 // Middleware de terceros
app.use(express.json());                         // Middleware incorporado en Express
app.use(express.text());                         // Middleware para manejar texto
app.use(express.urlencoded({ extended: true })); // Middleware para manejar formularios
app.use(upload.none());                          // Middleware para manejar form-data
app.use(bodyParser.xml({
  limit: '1MB',
  xmlParseOptions: {
    normalize: true,
    normalizeTags: true,
    explicitArray: false
  }
}));

// Utiliza las rutas definidas en el archivo clientes.js
app.use('/usuarios', clientes.router);

// Escucha en el puerto 3001
app.listen(3001, () => {
  console.log('Server Express escuchando en puerto 3001');
});

// // index.js
// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const mysql = require('mysql2/promise');
// const clientes = require('./Rutas/clientes.js'); 
// const bodyParser = require('body-parser');
// require('body-parser-xml')(bodyParser);
 
// const app = express();
// const router = express.Router(); // Declara el Router
// const upload = multer();
 
// // Conexión a la base de datos
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',  // Coloca tu contraseña aquí si es necesario
//     database: 'biblioteca',  // Cambia el nombre de la base de datos si es necesario
// });
 
// app.use(cors());                                 // Middleware de terceros
// app.use(express.json());                         // Middleware incorporado en Express
// app.use(express.text());                         // Middleware para manejar texto
// app.use(express.urlencoded({ extended: true })); // Middleware para manejar formularios
// app.use(upload.none());                          // Middleware para manejar form-data
// app.use(bodyParser.xml());                       // Middleware para manejar XML
 
// // Utiliza las rutas definidas en el archivo clientes.js
// app.use('/usuarios', clientes.router);
 
// // Escucha en el puerto 3001
// app.listen(3001, () => {
//   console.log('Server Express escuchando en puerto 3001');
// });
 
//npm i express
//npm i cors
//npm install express body-parser body-parser-xml
//npm install --save mysql2 para conectar con mysql

