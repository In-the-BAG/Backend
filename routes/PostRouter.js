const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/', controller.GetAllPosts)
router.post('/createpost', controller.CreatePost)
// router.put('/:post_id', middleware.stripToken,middleware.verifyToken,controller.UpdatePost)
// router.delete('/:post_id',middleware.stripToken,middleware.verifyToken,controller.DeletePost)

module.exports = router
