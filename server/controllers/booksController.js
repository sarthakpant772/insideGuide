const books = require('../models/books')


const  addAuthor= async (req,res)=>{
    const data = await books({
        author: req.body.author
    })

    try{ 
        const savedData = await data.save()
        res.status(201).json(savedData)
    }catch(err){
        res.status(500).json(err)
    }

}


const addBook = async (req, res) =>{

    const {author} = req.params
try{
    const savedData = await books.findOneAndUpdate(
        {
            author: author,
        },
        {
            $push:{
                book: {
                    name: req.body.book.name,
                    quantity: quantity ,
                    shelfNo : shelf,
                }
            }
        }
    )
    res.status(200).json(savedData)
}catch(err){
    res.status(500).json(err)
}
}

module.exports= {
    addAuthor,
    addBook
}