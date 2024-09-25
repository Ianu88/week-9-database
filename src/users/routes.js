const {Router} = require("express");
const userRouter = Router();        
const {hashPass,comparePass} = require("../middleware/auth")
const {addUser,login,getAllUsers,getUserByUsername} = require("./controllers")

userRouter.get("/users/getallusers", getAllUsers);
userRouter.get("/users/getuserbyusername/:username", getUserByUsername);


userRouter.post("/users/signup", hashPass, addUser);

userRouter.post("/users/login", comparePass, login);


module.exports = userRouter;
