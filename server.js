const express = require('express')
const cors = require('cors')


const app = express()

const AppRouter = require('./routes/AppRouter')
const AuthRouter = require('./routes/AuthRouter')
const PostRouter = require('./routes/PostRouter')
const UserRouter = require('./routes/UserRoute')
const CommentRouter = require('./routes/CommentRoute')


const PORT = process.env.PORT || 3023

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: truew }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.use('/auth', AuthRouter)
app.use('/post', PostRouter)
app.use('/user', UserRouter)
app.use('/comments', CommentRouter)


app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))