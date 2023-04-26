const express = require('express')
const {
  addAuthor,
  addBook,
  getShelf,
  getAuthor,
  getBookByName,
} = require('../controllers/booksController')
const auth = require('../middlewares/auth')

const bookrouter = express.Router()

bookrouter.post('/addAuthor', auth, addAuthor)
bookrouter.post('/addBook', auth, addBook)
bookrouter.get('/getShelf', auth, getShelf)
bookrouter.get('/getAuthor', getAuthor)
bookrouter.get('/getBookByName', getBookByName)

module.exports = bookrouter
