const express = require('express')
const { signup, signin, getUser } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.get('/getUser/:name', getUser)
module.exports = userRouter
