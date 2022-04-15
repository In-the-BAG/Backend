const Router = require('express').Router();
const controller = require('../controllers/UserController')

Router.get('/user', controller.GetUsers)

module.exports = Router