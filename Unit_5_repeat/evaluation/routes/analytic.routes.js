
const express= require('express')
const topproducts = require('../controller/analytics.controller')


const analyticrouter= express.Router()

analyticrouter.get("/top-products",topproducts)

module.exports=analyticrouter