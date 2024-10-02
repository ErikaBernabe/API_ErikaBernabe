const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
 app.use(cors())



app.get('/sendFile',(req,res)=>{
    let archivo=path.join(__dirname, '/img/1.jpeg')
    res.sendFile(archivo);
})

app.get('/download',(req,res)=>{
    let archivo=path.join(__dirname, '/img/1.jpeg')
    res.download(archivo);
})

app.get('/attachment',(req,res)=>{
    let archivo=path.join(__dirname, '/img/1.jpeg')
    res.attachment(archivo);
})

app.listen(3001,()=>{
    console.json('Server Express escuchando en el puerto 3001')
})

