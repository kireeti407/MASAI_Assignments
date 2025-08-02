const express=require(express)
const { addproduct,getproductb,updproducy,deleteproduct}= require("../controller/product.controller")

const productrouter=express.router()

productrouter.post('/product',addproduct)

productrouter.get('/products',getproductb)

productrouter.patch('/product/:id',updproducy)

productrouter.delete('/products/:id',deleteproduct)

module.exports=productrouter