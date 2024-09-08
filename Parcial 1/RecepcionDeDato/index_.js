const express = require('express');
const app = express();

const  cors  = require ('cors');

app.use(cors());               //Middleware de Terceros
app.use(express.json()); //Middleware Incorporado en Express
app.use(express.text()); 

app.get('/clienetes/:id',cors(),(req,res)=>{
    console.log(req,params)
    res.json({mmensaje:'Server Express contestando a peticion get'})
})

app.post('/cliente',(req,res)=>{
    console.log(req,query)
    res.json({mmensaje:'Server Express contestando a peticion post'})
})

app.put('/cliente',(req,res)=>{
    console.log(req,body)
    res.json({mmensaje:'Server Express contestando a peticion post'})
})



app.listen(3001,()=>{
    console.log('http://localhost:3001')
})

app.use(function(err,req,res,next){  //Middleware de Manejo de Errores
    res.status(500).send('Algo esta mal')

})