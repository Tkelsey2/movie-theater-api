const {Router} = require('express');

const userRouter = Router();

const {User} = require("../models")
const {Show} = require("../models")

userRouter.get('/users' , async (req,res) => {
    res.send(await User.findAll())
})

userRouter.get('/users/:userId', async (req, res) => {
    res.send(await User.findByPk(req.params.userId))
})

userRouter.get('/users/:userId/shows', async (req, res) => {
    const user = await User.findByPk(req.params.userId)
    res.send(await user.getShows())
})

userRouter.put('/users/:userId/shows/:showId ', async (req, res) => {
   
} )

module.exports = userRouter;