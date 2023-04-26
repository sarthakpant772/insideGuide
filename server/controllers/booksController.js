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

const author = req.body.author
try {
  const savedData = await books.findOneAndUpdate(
    {
      author: author,
    },
    {
      $push: {
        book: {
          name: req.body.book.name,
          quantity: req.body.book.quantity,
        },
      },
    },
  )
  res.status(200).json(savedData)
} catch (err) {
  res.status(500).json(err)
}

const addShelf = async (req, res) => {
  const data = await shelf({
    lane: req.body.lane,
    location: req.body.location,
  })
  try {
    const savedData = await data.save()
    res.status(201).json(savedData)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getShelf = async (req, res) => {
  const author = req.body.author
  // const book = req.body.book
  try {
    const data = await books.findOne({
      author: author,
    })

    const names = req.body.name

    for (let i = 0; i < data.book.length; i++) {
      if (data.book[i].name === names) {
        res.status(201).json(data.book[i]._id)
        break
      }
    }
  } catch (error) {
    res.status(404).json(error)
  }
}

const addBook = async (req, res) => {
  const data = await books({
    book: req.body.book,
    author: req.body.author,
    quantity: req.body.quantity,
    shelfName: req.body.shelf,
  })
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
  const author = req.body.books.author
  const book = req.body.books.book

  try {
    const prevdata = await books.findOne({ author, book })
    const newdata = await books.findOneAndUpdate({ author, book })

    const quantity = prevdata.quantity + 1
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  addAuthor,
  addBook,
  getShelf,
}
