const express = require("express");
const noteRouter = require("./noteRoutes");
const userRouter = require("./userRoutes");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next)=>{
    console.log("HTTP Method - " + req.method + " , URL - " + req.url );
    next();

});

app.use("/users",userRouter);
app.use("/note",noteRouter);

app.get("/",(req,res)=>{
    res.send("Hello");
});


mongoose.connect("mongodb+srv://admin:12345@cluster0.jkgv7sp.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Server started on port no. 5000");
    });

})
.catch((error)=>{
    console.log(error);
})
