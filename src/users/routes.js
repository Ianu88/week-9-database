const {Router} = require("express");
const userRouter = Router();        
const {hashPass} = require("../middleware/auth")
const {addUser,login} = require("./controllers")
const{comparePass} = require("../middleware/auth")

userRouter.post("/users/signup", hashPass, addUser);

userRouter.post("/users/login", comparePass, login);


module.exports = userRouter;
