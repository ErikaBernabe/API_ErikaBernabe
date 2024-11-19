// const express = require('express');
// const app = express();
 
// const  cors  = require ('cors');
// app.use(cors());                //Middleware de Terceros
 
// app.get('/',cors(),(req,res)=>{
//     res.json({mensaje: 'Server Express contestando a peticion get'})
// })
 
// app.listen(3002,()=>{
//     console.log('Server Express Escuchando en puerto 3000')
// })
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors()); // Middleware de Terceros

app.get('/empleado', (req, res) => {  // Cambié '/' por '/empleado' para coincidir con el test
    res.json({ mensaje: 'Server Express contestando a petición get' });
});

app.listen(3002, () => {
    console.log('Server Express escuchando en puerto 3002');
});
