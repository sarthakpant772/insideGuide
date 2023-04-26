const mongoose = require('mongoose')

const BookSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      unique: true,
    },

    book: {
      type: [
        {
          name: String,
          quantity: String,
          shelfNo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shelf',
            required: true,
          },
        },
      ],

      default: [],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Books', BookSchema)
