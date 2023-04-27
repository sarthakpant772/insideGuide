const express = require("express");
const { signup, signin } = require("../controllers/userController");
const { issueBook } = require("../controllers/libController");
const userRouter = express.Router();


userRouter.post("/signup",signup);
userRouter.post("/signin",signin);
userRouter.post("/issuebook",issueBook)

module.exports=userRouter;