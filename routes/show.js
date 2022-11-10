const {Router} = require('express');

const showRouter = Router();

const Show = require("../models/Show");

showRouter.get('/shows' , async (req,res) => {
    res.send(await Show.findAll())
})

showRouter.get('/shows', async (req, res) => {
    res.send(await Show.findOne())
})

showRouter.get('/shows/:genre', async (req, res) =>{
    res.send(Show[req.params.genre])
})



module.exports = showRouter;