const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({

        name:{
            type: String,
            required:true,
            unique: true
        }
})

module.exports=mongoose.model("Author",AuthorSchema)