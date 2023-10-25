const express = require('express');

const Router = express.Router();

const {getAllUsers,createUser,getUser,updateUser,deleteUser} = require('./../Controllers/userController')

Router.route('/')
.get(getAllUsers)
.post(createUser)

Router.route('/:userId')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)
module.exports = Router