
const express=require('express')
const { gteproduct, getelecle, atloneproduct } = require('../controller/filter.controller')

const filterrouter=express.Router()

filterrouter.get("/productgt1000",gteproduct)

filterrouter.get("/ele-clo",getelecle)

filterrouter.get("/atl-one",atloneproduct)

module.exports=filterrouter