const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/allPosts', controller.GetAllPosts),
Router.get('/view/:postId', controller.GetPostDetails),
Router.post('/:userid/:postid', controller.CreatePost)
Router.put('/:postId', controller.UpdatePost)
Router.delete('/:postId', controller.DeletePost)

module.exports = Router