const shelf = require("../models/shelf")

const addpath =async(req,res)=>{
    const {name,path}=req.body
    try {

        const data = await shelf({
            name,path
        })

        const savedData= await data.save()
        res.status(200).json(savedData)

    } catch (error) {
        res.status(500).json(error)
    }

}

const getPath = async(req,res)=>{
try{
        const data = await shelf.find()
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

}

module.exports={addpath,getPath}