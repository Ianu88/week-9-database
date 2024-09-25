const {Router} = require("express");
const userRouter = Router();        
const {hashPass} = require("../middleware/auth")
const {addUser,login,getAllUsers} = require("./controllers")
const{comparePass} = require("../middleware/auth")

userRouter.get("/users/getAllUsers", getAllUsers);

userRouter.post("/users/signup", hashPass, addUser);

userRouter.post("/users/login", comparePass, login);


module.exports = userRouter;
