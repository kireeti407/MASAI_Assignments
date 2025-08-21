const express=require('express')
const { moderatorMiddleware, authmiddleware } = require('../middleware/auth.middleware')

const { posts, getPosts, getPostById, deletePost } = require('../controller/post.controller')

const postR=express.Router()

postR.post('/posts',authmiddleware,posts)

postR.get('/posts',getPosts)

postR.get('/posts/:id',getPostById) 

postR.delete('/posts/:id',moderatorMiddleware,deletePost)

module.exports=postR