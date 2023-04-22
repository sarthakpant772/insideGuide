const books = require('../models/books')
const shelf = require('../models/shelf')


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

    const author = req.body.author
try{
    const savedData = await books.findOneAndUpdate(
        {
            author: author,
        },
        {
            $push:{
                book: {
                    name: req.body.book.name,
                    quantity: req.body.book.quantity ,
                    
                }
            }
        }
    )
    res.status(200).json(savedData)
}catch(err){
    res.status(500).json(err)
}
}

const addShelf = async ( req,res) =>{
    
        const data = await shelf({
        lane: req.body.lane,
        location: req.body.location
    })
   try{ 
     const savedData = await data.save()
     res.status(201).json(savedData)
   }catch(err){
    res.status(500).json(err)
   }
}

const getShelf = async(req,res) =>{

    const author = req.body.author
   // const book = req.body.book
    try {
        const data = await books.findOne({
        author: author

    })

        const names=req.body.name

        for(let i=0; i < data.book.length ; i++){
            if(data.book[i].name===names){
                res.status(201).json(data.book[i]._id)
                break
            }
        }


    } catch (error) {
        res.status(404).json(error)
    }


}


module.exports= {
    addAuthor,
    addBook,
    getShelf
}