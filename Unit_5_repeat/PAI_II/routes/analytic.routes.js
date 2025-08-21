const express=require("express")
const { moderatorMiddleware } = require("../middleware/auth.middleware")
const { topActiveUsers, mostUpvotedPosts } = require("../controller/analytic.controller")

const analyticR = express.Router()

analyticR.get('/stats/topActiveUsers',moderatorMiddleware,topActiveUsers)
analyticR.get('/stats/mostUpvotedPosts',moderatorMiddleware,mostUpvotedPosts)

module.exports=analyticR

