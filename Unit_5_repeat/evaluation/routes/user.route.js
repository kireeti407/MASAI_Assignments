const express=require("express")

const{adduser,getusers}=require('../controller/user.controller')

const userrouter=express.router()

userrouter.post('/users',adduser)

userrouter.get('/users',getusers)

module.exports=userrouter



