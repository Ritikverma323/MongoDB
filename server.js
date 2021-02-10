const express= require('express');
const dotenv=require('dotenv');
const app=express();


// Load config
dotenv.config({path:'./config/config.env'});

const PORT=process.env.PORT || 3000;

// database 

const connectionDatabase=require('./database/connectionDatabase')


app.get('/',(req,res)=>{
    res.send('<h1>Hello from Node </h1>') 
    
})
app.listen(3000,console.log(` server running in ${process.env.NODE_ENV} on port ${PORT} `));

 

 
