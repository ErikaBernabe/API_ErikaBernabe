const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const JWT_SECRET = 'mySecretKey';
const users = []; // Almacenamiento temporal de usuarios

app.use(bodyParser.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.send('Server Express contestando a petición GET');
});

app.post('/', (req, res) => {
    res.send('Server Express contestando a petición POST');
});

// Ruta de registro
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = { username, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

// Ruta de login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Buscar el usuario en la "base de datos"
    const user = users.find((user) => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Generar el token JWT
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login exitoso', token });
});

// Middleware para verificar el token JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Acceso denegado' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token no válido' });
        req.user = user;
        next();
    });
};

// Ruta protegida que requiere autenticación
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Accediste a una ruta protegida', user: req.user });
});

// Escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Server Express escuchando en el puerto 3000');
});
