
const express=require("express");
const { handlegetallusers,handlegetbyid,handlepatchbyid,handledeletebyid,handlepostbyid } = require("../controllers/user");
const router=express.Router();

//routes
router.route("/")
.get(handlegetallusers)             //args passed automatically to the functions called
.post(handlepostbyid);     

router.route("/:id")                        
    .get( handlegetbyid)
    .patch( handlepatchbyid)
    .delete(handledeletebyid);               

module.exports=router;