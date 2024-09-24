const {Router} = require("express");
const userRouter = Router();        
const {hashPass} = require("../middleware/auth")
const {addUser} = require("./controllers")

userRouter.post("/users/signup", hashPass, addUser);


module.exports = userRouter;
