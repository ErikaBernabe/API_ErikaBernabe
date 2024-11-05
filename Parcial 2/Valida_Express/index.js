const express = require('express');
const { query, validationResult } = require('express-validator'); 
const app = express();
 
const cors = require('cors');
app.use(cors());
 
app.get(
    '/',
    query('id').isInt().withMessage('El ID debe ser un número entero'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('Server Express contestando a petición GET');
    }
);


app.listen(3000, () => {
    console.log('Server Express escuchando en el puerto 3000');
});


