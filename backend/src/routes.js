const express = require('express')

//CONTROLLERS
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

//ROUTES
const routes = express.Router()

//GET
routes.get('/devs', DevController.index)

//POST
routes.post('/devs', DevController.store)
routes.post('/devs/likes/:idDev', LikeController.store)
routes.post('/devs/dislikes/:idDev', DislikeController.store)

module.exports = routes