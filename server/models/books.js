const mongoose = require('mongoose')

const BookSchema = mongoose.Schema(
  {
    book: {
      type: String,
  
    },

    author: {
      type: String,
    },

    quantity: Number,

    shelfName: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Books', BookSchema)
