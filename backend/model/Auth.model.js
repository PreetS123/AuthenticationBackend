const mongoose= require('mongoose');

const authSchema=new mongoose.Schema({
    name:{type:String,required:false},
    age:{type:Number,required:false},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const authModel= mongoose.model('auth',authSchema);


module.exports=authModel