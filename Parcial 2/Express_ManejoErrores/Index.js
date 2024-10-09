const express = require('express');
const app = express();
 
const  cors  = require ('cors');
app.use(cors());
 
 
app.get('/',(req,res)=>{
    if(tru){
        res.json({message:'Server Express contestando a peticion get'})
    }
    else{
        res.json({message:'Server Express contestando a peticion get'})
            next(err);
    }
})
 
app.use((err,req,res,next)=>{
    console.log(err);
    res.json({error:err.message});
});
 
app.listen(3000,()=>{
    console.log('Server Express escuchando en el puerto 3000')
})