const express=require("express");
const users =require("./users_data.json");

const app =express();
const fs =require("fs");
app.use(express.urlencoded({extended:false})); //middle ware to receive post request from postman

//routes
app.get("/users_names",(req,res)=>{             //get all first names 
    const http=`
    <ul>
    ${users.map((user)=>{
        return `<li>${user.first_name}</li>`}).join("")}
    </ul>
    `;
    res.send(http);
});
app.get("/users",(req,res)=>{                   // print all users
   res.json(users);
});

app.route("/users/:id")                         //GROUP 
.get((req,res)=>{                               //getting user details with id
    const id= Number(req.params.id);
    const user=users.find((user)=>{return user.id===id});
    return res.json(user)
})
.patch((req,res)=>{    
    let id=Number(req.params.id);                                                   //todo: edit the user with id
    let body=req.body;
    users.map((user)=>{
        if (user.id===id){
            user.first_name=body.first_name;
            user.last_name=body.last_name;
            user.gender=body.gender;
            user.email=body.email;
            user.job_title=body.job_title;
            console.log("user object modified successfully inlocal storage");
        }
    })
    fs.writeFile("./users_data.json",JSON.stringify(users),(err,data)=>{
        res.json({status:"success"});
    });
})
.delete((req,res)=>{                                                       //todo: delete the use with id
    let id =Number(req.params.id);
    let index=id-1;
    users.splice(index,1);
    fs.writeFile("./users_data.json",JSON.stringify(users),(err,data)=>{
    res.json(users);
   });
   
    
});

app.post("/userpost",(req,res)=>{
    const body=req.body;
    users.push({body,id: users.length + 1});
    console.log("kjsdghljsdh");
    fs.writeFile("./users_data.json",JSON.stringify(users),(err,data)=>{
        res.json({status:"success",id:users.length});
        console.log("post request success");
    });
});
app.listen(1234,()=>{console.log("server is listning ...")});
