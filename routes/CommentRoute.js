const Router = require('express').Router()
const controller = require('../controllers/CommentController')


// Router.get('/view/:commentid', controller.GetCommentDetails),
// Router.post('/:userid/:postid', controller.CreateComment)
// Router.put('/:commentid', controller.UpdateComment)
// Router.delete('/:commentid', controller.DeleteComment)
Router.get('/postComments/:postId', controller.GetPostComments)

module.exports = Router