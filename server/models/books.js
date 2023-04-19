const mongoose = require("mongoose");

const BookSchema=mongoose.Schema({

    author:{
        type: String ,
        required : true

    },

    book:{
        type:[
            {
                name: String,
                quantity: String,
                shelfNo: Number,
            },
        ],

    default:[]  ,  
    }


    
},{timestamps: true});

module.exports=mongoose.model("Books",BookSchema);