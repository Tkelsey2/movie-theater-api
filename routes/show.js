const {Router} = require('express');

const showRouter = Router();

const Show = require("../models/Show");

showRouter.get('/shows' , async (req,res) => {
    res.send(await Show.findAll())
})

showRouter.get('/shows/:showId', async (req, res) => {
    res.send(await Show.findOne())
})

showRouter.get('/shows/genres/:genre', async (req, res) =>{ 
    res.send(Show[req.params.genre])
})

showRouter.put('/shows/:showId/watched', async (req, res) => {
    res.send(Show)
})

showRouter.put('/shows/:showId/updates', async (req, res) => {
    res.send(req.body.status);
})

showRouter.delete('/shows', (req, res) => {
    
})

module.exports = showRouter;