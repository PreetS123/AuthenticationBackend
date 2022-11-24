const express= require('express');
const cors=require('cors');
const connection= require('./config');
const authRouter= require('./routes/Auth.routes');
require('dotenv').config();

const app= express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('WELCOME TO AUTHENTICATION WORLD');
})

app.use('/auth',authRouter);


const PORT=process.env.PORT||8080;

app.listen(PORT,async()=>{
    try{
        await connection;
    }catch(er){
        console.log('check config file',er);
    }
    console.log(`listening on port ${PORT}`)
})