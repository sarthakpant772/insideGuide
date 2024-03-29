const express = require('express')
const {
  addAuthor,
  addBook,
  // getShelf,
  getAuthor,
  getBookByName,
  incBook,
  decBook,
  getBook,
  checkAuthor,
  checkBook,
} = require('../controllers/booksController')
const auth = require('../middlewares/auth')
const { addpath, getPath } = require('../controllers/pathController')
const { issueBook, removeBook } = require('../controllers/libController')

const bookrouter = express.Router()

bookrouter.post('/addAuthor', addAuthor)
bookrouter.post('/addBook', auth, addBook)
bookrouter.get('/getBook', getBook)
// bookrouter.get('/getShelf', auth, getShelf)
bookrouter.get('/getAuthor', auth, getAuthor)
bookrouter.post('/getBookByName', getBookByName)
bookrouter.put('/incBook', incBook)
bookrouter.put('/decBook', decBook)
bookrouter.post('/addPath', addpath)
bookrouter.get('/getPath/:name', getPath)
bookrouter.put('/issueBook', issueBook)
bookrouter.put('/removeBook', removeBook)
bookrouter.get('/checkAuthor/:name', checkAuthor)
bookrouter.get('/checkBook/:name/:book', checkBook)
module.exports = bookrouter
