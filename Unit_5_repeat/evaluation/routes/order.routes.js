const express=require("express")
const { addorders, getorders, delorder } = require("../controller/order.controller")

const orderroter=express.Router()

orderroter.post('/orders',addorders)

orderroter.get('/orders',getorders)

orderroter.delete('/order/:id',delorder)

module.exports=orderroter