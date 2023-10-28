
const mongoose=require("mongoose");

//schema
const userSchema=new mongoose.Schema(
    {
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
        
    },
    gender:{
        type:String,
        required:true,
    },
    job_title:{
        type:String,
        required:true,
    },
});

//model
const User = mongoose.model("user",userSchema);
module.exports=User