const express= require('express');
const cors=require('cors');

const app= express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('WELCOME TO AUTHENTICATION WORLD');
})


app.listen(8080,()=>{
    console.log('listening on port 8080')
})