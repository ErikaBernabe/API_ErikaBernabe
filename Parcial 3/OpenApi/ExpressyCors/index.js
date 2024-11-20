const express = require('express');
const app = express();
// const cors = require('cors')

// app.use(cors())

app.get('/',(req,res)=>{
    res.json('Server Express contestando a peticion get')
})

app.post('/',(req,res)=>{
    res.json('Server Express contestando a peticion post')
})

app.listen(3001,()=>{
    console.json('Server Express escuchando en el puerto 3001')
})

