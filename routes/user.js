const {Router} = require('express');

const userRouter = Router();

const User = require("../models/User")

userRouter.get('/users' , async (req,res) => {
    res.send(await User.findAll())
})

userRouter.get('/users/:userId', async (req, res) => {
    res.send(await User.findOne(userId))
})

userRouter.get('/users/:userId/shows', async (req, res) => {
    res.send(User[req.params.userId])
})

userRouter.put('/users/:userId/shows/showId ', (req, res) => {
    res.send()
} )

module.exports = userRouter;