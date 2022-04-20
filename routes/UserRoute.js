const Router = require('express').Router();
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.get('/:userid', controller.GetUserByPk)
Router.post('/:userid', controller.CreateUser)
Router.put('/edit/:userid', middleware.stripToken,middleware.verifyToken, controller.UpdateUser)
Router.delete('/:userid', controller.DestroyUser)

module.exports = Router