const express =require("express");
const users =require("./users_data.json");
const userRouter=require("./routes/user");
const mongoose=require("mongoose");
const app =express();

//const {connectmongodb}=require("./connection")          //connection mongoose to mongodb

mongoose.connect("mongodb://127.0.0.1:27017/dhanesh")
.then(()=>{return console.log("connected")})
.catch(()=> console.log("conection failed"))

//connectmongodb(url)

app.use(express.urlencoded({extended:false}));              //middle ware to receive post request from postman

//routes
app.use("/user",userRouter);

app.listen(3000,()=>{console.log("server is listning ...")});
