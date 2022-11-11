const {Router} = require('express');

const userRouter = Router();

const {User} = require("../models")
const {Show} = require("../models")

userRouter.get('/' , async (req,res) => {
    res.send(await User.findAll())
})

userRouter.get('/:userId', async (req, res) => {
    res.send(await User.findByPk(req.params.userId))
})

userRouter.get('/:userId/shows', async (req, res) => {
    const user = await User.findByPk(req.params.userId)
    res.send(await user.getShows())
})

userRouter.put('/:userId/shows/:showId', async (req, res) => {
   const user = await User.findByPk(req.params.userId)
   const show = await Show.findByPk(req.params.showId)
   await user.addShow(show)
   res.send("show has been added to user")
} )

module.exports = userRouter;