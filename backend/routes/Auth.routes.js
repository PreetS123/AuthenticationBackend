const express= require('express');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken')
const authModel= require('../model/Auth.model');

const authRouter= express.Router();

authRouter.post('/signup',async(req,res)=>{
    const {name,age,email,password}= req.body;
    try{
        bcrypt.hash(password, 8,(err, hash)=> {
            // Store hash in your password DB.
            if(err){
                return res.send('something went wrong');
            }
            const user= new authModel({name,age,email,password:hash});
             user.save();
            res.send({User:user,message:'ACCOUNT CREATED'})
        });
       
    }catch(er){
        res.status(500).send({auth:'Signup unsuccessful',message:er.message})
    }
})

   authRouter.post('/login',async(req,res)=>{
      let {email,password}= req.body;
      try{
        let auth_user= await authModel.findOne({email:email});
        let hash= auth_user.password;
        await bcrypt.compare(password, hash,(err, result)=> {
            // result == true
            if(err){
                return res.send('please login again');
            }
            if(result){
                const token= jwt.sign({email:auth_user.email},'secret')
                if(!auth_user){
                    return res.send('invalid credentials');
                }
                return res.send({message:'LOGIN SUCCESSFUL'});
            }else{
               return res.send('invalid credentials');
            }
        });
      }catch(er){
        res.send({message:'login done',auth:auth})
      }
    })

module.exports=authRouter;