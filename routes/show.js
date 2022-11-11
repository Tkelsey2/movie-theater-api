const {Router} = require('express');

const showRouter = Router();

const {Show} = require("../models");

showRouter.get('/shows' , async (req,res) => {
    res.send(await Show.findAll())
})

showRouter.get('/shows/:showId', async (req, res) => {
    res.send(await Show.findByPk(req.params.showId))
})

showRouter.get('/shows/genres/:genre', async (req, res) =>{ 
    res.send(await Show.findOne(req.params.genre))
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