const express = require('express')
const {addAuthor, addBook, getShelf, getBook, incBook, getAuthor} = require('../controllers/booksController')
const auth = require('../middlewares/auth')

const bookrouter = express.Router()

bookrouter.post('/addAuthor',auth, addAuthor)
bookrouter.post('/addBook',addBook)
bookrouter.get('/getAuthor',auth, getAuthor)
bookrouter.get('/getBook', getBook)
bookrouter.put('/incBook',incBook)

module.exports=bookrouter;