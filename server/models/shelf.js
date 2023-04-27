const mongoose = require("mongoose")


const shelfSchema= mongoose.Schema({

    name:{
        type:String,
        required: true,
        unique: true

    },
    path:{
        type:[
            String
        ],
        default:[]
    }

},{timestamps: true})



module.exports = mongoose.model("Shelf",shelfSchema)