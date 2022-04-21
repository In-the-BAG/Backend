const router = require('express').Router()
const controller = require('../controllers/PostController')
const likeController = require('../controllers/LikedPostController')
const middleware = require('../middleware')

router.get('/', controller.GetAllPosts)
router.post('/createpost', controller.CreatePost)
router.put('/:post_id', middleware.stripToken,middleware.verifyToken,controller.UpdatePost)
router.delete('/:post_id',middleware.stripToken,middleware.verifyToken,controller.DeletePost)
router.get('/profile/:userid', controller.GetPostByUser)

router.post('/likepost', likeController.LikePost)
router.delete('/unlikepost', likeController.unLikePost)



module.exports = router
