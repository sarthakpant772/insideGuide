const express = require('express')
const {addAuthor, addBook} = require('../controllers/booksController')
const auth = require('../middlewares/auth')

const bookrouter = express.Router()

bookrouter.post('/addAuthor',auth, addAuthor)
bookrouter.put('/addBook/:author',addBook)

module.exports=bookrouter;