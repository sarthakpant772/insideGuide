const mongoose = require('mongoose')

const BookSchema = mongoose.Schema(
  {
    book: {
      type: String,
      reqired: true,
    },

    author: {
      type: String,
      required: true,
    },

    quantity: String,

    shelfName: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Books', BookSchema)
