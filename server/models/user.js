const mongoose = require("mongoose");
const books = require("./books");

const UserSchema = mongoose.Schema({

    username : {
        type : String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type : String,
        required : true
    },

    books : {
       type: [
        {
            name:String,
            book_id:String
        }

        ]
    }

},{timestamps : true} );

module.exports = mongoose.model("User",UserSchema);