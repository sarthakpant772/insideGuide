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

    quantity: Number,

    shelfName: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Books', BookSchema)
