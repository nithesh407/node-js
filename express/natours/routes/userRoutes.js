const express = require('express');

const userRouter = express.Router();

const {getAllUsers,createUser,getUser} = require('./../Controllers/userController')

userRouter.route('/')
.get(getAllUsers)
.post(createUser)

userRouter.route('/:userId')
.get(getUser)

module.exports = userRouter