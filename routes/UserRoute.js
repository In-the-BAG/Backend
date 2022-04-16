const Router = require('express').Router();
const controller = require('../controllers/UserController')

Router.get('/getallusers', controller.GetUsers)
// Router.get('/:userid', controller.GetUserByPk)
// Router.post('/:userid', controller.CreateUser)
// Router.put('/:userid', controller.UpdateUser)
// Router.delete('/:userid', controller.DestroyUser)

module.exports = Router