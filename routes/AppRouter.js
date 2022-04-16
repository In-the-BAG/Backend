const Router = require('express').Router()

const UserRouter = require('./UserRoute')
// const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRoute')

Router.use('/user', UserRouter)
// Router.use('/post', PostRouter)
Router.use('/comment', CommentRouter)

module.exports = Router