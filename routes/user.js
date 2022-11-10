const {Router} = require('express');

const userRouter = Router();

const User = require("../models/User")

userRouter.get('/users' , async (req,res) => {
    res.send(await User.findAll())
})

userRouter.get('/users', async (req, res) => {
    res.send(await User.findOne())
})

userRouter.get('/users/:id', async (req, res) => {
    res.send(User[req.params.id])
})

userRouter.put('/users', (req, res) => {
    res.send()
} )

module.exports = userRouter