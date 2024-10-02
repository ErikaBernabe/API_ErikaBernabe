const express = require('express');
const app = express();
const path = require('path');
const  cors  = require ('cors');
app.use(cors());

app.use(express.json());


app.get('/sendFile',(req,res)=>{
    let archivo=path.join(__dirname, '/Imagenes/1.jpg')
    res.sendFile(archivo)
})

app.get('/download',(req,res)=>{
    let archivo=path.join(__dirname, '/Imagenes/1.jpg');
    res.download(archivo)
})

app.get('/attachment',(req,res)=>{
    let archivo=path.join(__dirname, '/Imagenes/1.jpg');
    res.attachment(archivo)
    res.sendFile()
})

app.listen(3001,()=>{
    console.log('http://localhost:3001')
})