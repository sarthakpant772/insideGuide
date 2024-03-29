const express = require('express')
const noteRouter = require('./routes/noteRoutes')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
const bookRouter = require('./routes/bookRoutes')
const app = express()

const mongoose = require('mongoose')

app.use(express.json())
app.use(express.json({ limit: '64mb' }))

app.use(cors())

app.use((req, res, next) => {
  console.log('HTTP Method - ' + req.method + ' , URL - ' + req.url)
  next()
})

app.use('/users', userRouter)
app.use('/note', noteRouter)

app.use('/book', bookRouter)

mongoose
  .connect(
    'mongodb+srv://admin:12345@cluster0.jkgv7sp.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    app.listen(5000, () => {
      console.log('Server started on port no. 5000')
    })
  })
  .catch((error) => {
    console.log(error)
  })
