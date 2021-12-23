const express = require("express");
const{ getAllUsers, createUser} = ("../controllers/basicServerControllers");
const { BasicServer } = require('../models/basicServer');


const router = express.Router(); 

router.get('/getAllUsers', getAllUsers);

router.post("/createUser" , createUser);

module.exports=router;