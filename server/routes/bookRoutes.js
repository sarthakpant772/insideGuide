const express = require('express')
<<<<<<< HEAD
const {addAuthor, addBook, getShelf, getBook, incBook, getAuthor} = require('../controllers/booksController')
=======
const {
  addAuthor,
  addBook,
  getShelf,
} = require('../controllers/booksController')
>>>>>>> 5fda14ccebe6eb314a5b7407b9ba5522b7ceee46
const auth = require('../middlewares/auth')

const bookrouter = express.Router()

<<<<<<< HEAD
bookrouter.post('/addAuthor',auth, addAuthor)
bookrouter.post('/addBook',addBook)
bookrouter.get('/getAuthor',auth, getAuthor)
bookrouter.get('/getBook', getBook)
bookrouter.put('/incBook',incBook)
=======
bookrouter.post('/addAuthor', auth, addAuthor)
bookrouter.put('/addBook', addBook)
bookrouter.get('/getShelf', getShelf)
>>>>>>> 5fda14ccebe6eb314a5b7407b9ba5522b7ceee46

module.exports = bookrouter
