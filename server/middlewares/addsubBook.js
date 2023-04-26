const books = require("../models/books");

const counter = (req,res,next)=>{
    
        const quantity = req.body.books.quantity;
        
        setInterval(() =>{
            quantity++;
        },1);
        res.json({quantity})


}
module.exports=counter