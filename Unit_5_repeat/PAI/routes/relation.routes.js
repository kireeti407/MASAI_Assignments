const express=require('express')
const getrelation = require('../controller/relation.controller')

const relationrouter=express.Router()

relationrouter.get('/api/publishers/:publisherId/games',getrelation)

module.exports=relationrouter