const {Router} = require('express');

const showRouter = Router();

const {Show} = require("../models");

showRouter.get('/' , async (req,res) => {
    res.send(await Show.findAll())
})
showRouter.get('/:showId', async (req, res) => {
    res.send(await Show.findByPk(req.params.showId))
})

showRouter.get('/genres/:genre', async (req, res) =>{ 
    res.send(await Show.findAll({where: {genre:req.params.genre}}))
})

showRouter.put('/:showId/rating', async (req, res) => {
    const watched = await Show.findByPk(req.params.showId)
    await watched.update({rating: req.body.rating})
    res.send("rating has been updated")
})

showRouter.put('/:showId/updates', async (req, res) => {
    const update = await Show.findByPk(req.params.showId)
    if(update.status === "canceled"){
        update.status = "on-going"
    } else {
        update.status = "canceled"
    }
    res.send("status updated")
})

showRouter.delete('/:showId', (req, res) => {
    
})

module.exports = showRouter;