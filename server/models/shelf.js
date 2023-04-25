const mongoose = require("mongoose")


const shelfSchema= mongoose.Schema({

    name:{type:String,
        unique: true,
    },
    path:{
        type:[
            {
                service:String
            }
        ],
        default:[]
    }

},{timestamps: true})



module.exports = mongoose.model("Shelf",shelfSchema)