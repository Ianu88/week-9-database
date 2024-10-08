require("dotenv").config();
const express = require("express");
const exampleRouter =require("./middlewareExample.js");
const User = require ("./users/models.js");
const userRouter = require("./users/routes.js")
const port = process.env.PORT||5001;
const cors=require("cors")

const app = express();

app.use(express.json());

app.use(cors());

app.use(userRouter)

app.use(exampleRouter)
const syncTables = ()=>{
    User.sync();
}
app.use("/health", (req,res)=>{
    res.status(200).json({message:"API is healthy"})
});

app.listen(port, ()=>{
 syncTables();   
    console.log(`server is listening on ${port}`)
});