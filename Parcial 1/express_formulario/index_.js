const express = require('express');
const app = express();

const  cors  = require ('cors');

app.use(cors());               //Middleware de Terceros
app.use((req,res,next)=>{     //Middleware de Aplicacion
    console.log(new Date());
    next();
})

app.use(express.json()); //Middleware Incorporado en Express

app.get('/',cors(),(req,res)=>{
    res.send('Server Express contestando a peticion get')
    next(error);
})

app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
})

app.listen(3001,()=>{
    console.log('http://localhost:3001')
})

app.use(function(err,req,res,next){  //Middleware de Manejo de Errores
    res.status(500).send('Algo esta mal')

})