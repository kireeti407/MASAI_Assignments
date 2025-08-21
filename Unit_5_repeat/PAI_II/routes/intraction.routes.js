const express=require("express")
const { authmiddleware } = require("../middleware/auth.middleware")
const { comments, upvotes } = require("../controller/intraction.controller")

const intractionR=express.Router()

intractionR.post('/interact', authmiddleware,comments)

intractionR.get('/interact',authmiddleware,upvotes)

module.exports=intractionR