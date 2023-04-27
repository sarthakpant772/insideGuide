const author = require('../models/author')
const books = require('../models/books')
const shelf = require('../models/shelf')

const addAuthor = async (req, res) => {
  const data = await author({
    name: req.body.name,
  })

  try {
    const savedData = await data.save()
    res.status(201).json(savedData)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAuthor = async (req, res) => {
  try {
    const data = await author.find()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

const addBook = async (req, res) => {
  const data = await books({
    book: req.body.book,
    author: req.body.author,
    quantity: req.body.quantity,
    shelfName: req.body.shelfName,
  })
  console.log(data)
  try {
    const savedData = await data.save()
    res.status(201).json(savedData)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getBook = async (req, res) => {
  try {
    const data = await books.find()
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const incBook = async (req, res) => {
  const author = req.body.author
  const book = req.body.book

  try {
    const prevdata = await books.findOne({
      author: author,
      book: book,
    })

    const newdata = await books.findOneAndUpdate(
      {
        author: author,
        book: book,
      },

      { quantity: prevdata.quantity + 1 },
    )

    res.status(200).json(newdata)
  } catch (error) {
    res.status(500).json(error)
  }
}

const decBook = async (req, res) => {
  const author = req.body.author
  const book = req.body.book

  try {
    const prevdata = await books.findOne({
      author: author,
      book: book,
    })
    const newdata = await books.findOneAndUpdate(
      {
        author: author,
        book: book,
      },

      { quantity: prevdata.quantity - 1 },
    )

    res.status(200).json(newdata)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getBookByName = async (req, res) => {
  const { book, author } = req.body
  //   console.log(req)
  try {
    const data = await books.findOne({
      book: book,
      author: author,
    })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  addAuthor,
  addBook,
  getAuthor,
  getBook,
  incBook,
  decBook,
  getBookByName,
}
