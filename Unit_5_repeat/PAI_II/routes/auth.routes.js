const express=require('express')

const {singup,login}=require('../controller/auth.controller')

const authC=express.Router()

authC.post('/register',singup)

authC.post('/login',login)


module.exports = authC;