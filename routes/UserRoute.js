const Router = require('express').Router();
const controller = require('../controllers/UserController')

Router.get('/users', controller.GetUsers)

module.exports = Router