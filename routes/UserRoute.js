const Router = require('express').Router();
const controller = require('../controllers/UserController')

Router.get('/getallusers', controller.GetUsers)

module.exports = Router