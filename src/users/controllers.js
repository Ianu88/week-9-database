const User = require("./models")
const addUser = async(req,res)=>{
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(201).json({message:"Success!", user:user})
    } catch (error) {
     res.status(501).json({message: error.message, error:error});
    }
};

module.exports ={
    addUser,
};