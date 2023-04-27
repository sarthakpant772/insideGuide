const user = require("../models/user")

const issueBook = async(req,res)=>{
const username=req.body.username
    try{
       
        const savedData=await user.findOneAndUpdate({
            username:username
             } ,{
                $push:{ 
                    books:{
                    name:req.body.name,
                    book_id:req.body.book_id,
                },
             },
            }  
        )
      
    res.status(200).json(savedData)
     } 
catch(error){
    res.status(500).json(error)
}

}



module.exports={issueBook}