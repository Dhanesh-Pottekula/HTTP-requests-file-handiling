const User=require("../models/user");

async function handlegetallusers(req,res){
    const user1= await User.find({});
    res.status(200).json(user1);
}

async function handlegetbyid(req,res){
    const user= await User.findById(req.params.id);
    if(!user){res.status(404).json({status:"failed"})};
    res.status(200).json(user);
}

async function handlepatchbyid(req,res){
    await User.findByIdAndUpdate(req.params.id,{last_name:"pottekula bro"});
    res.status(201).end("patch successfull");
}

async function handledeletebyid(req,res){
    await User.findByIdAndDelete(req.params.id);
    res.json({status:"success"});
}
async function handlepostbyid(req,res){
    const body=req.body;
    console.log("post request recived");
    if (
        !body ||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_title
    ){
        return res.status(400).json({msg:"all feilds are required"});
    }
    const result=await User.create({                                            //creating the object using  the model
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    });
    
    
    res.status(201).json({status:"success"});
}
module.exports={
    handlegetallusers,
    handlegetbyid,
    handlepatchbyid,
    handledeletebyid,
    handlepostbyid


}