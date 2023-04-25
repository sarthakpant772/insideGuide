const express = require('express')
const {
  addAuthor,
  addBook,
  getShelf,
} = require('../controllers/booksController')
const auth = require('../middlewares/auth')

const bookrouter = express.Router()

bookrouter.post('/addAuthor', auth, addAuthor)
bookrouter.put('/addBook', addBook)
bookrouter.get('/getShelf', getShelf)

module.exports = bookrouter
