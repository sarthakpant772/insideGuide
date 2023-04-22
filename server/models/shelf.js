const mongoose = require("mongoose")


const shelfSchema= mongoose.Schema({

    lane:{
        type: String ,
        required:true,
    },

    location:{
        type:String,
        required:true
    }

},{timestamps: true})



module.exports = mongoose.model("Shelf",shelfSchema)