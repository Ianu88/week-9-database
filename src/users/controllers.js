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
const login = async(req,res)=>{
  try {
    res.status(201).json({message: "success"});
  } catch (error) {
    res.status(501).json({message: error.message, error:error});

  }
};

const getAllUsers = async(req,res) =>{
  try{
      const users = await User.findAll();
      res.status(201).json({message:"success, all users located", users: users});
  } catch(error){
      res.status(500).json({message:error.message, error: error})
  }
  };
module.exports ={
    addUser, login, getAllUsers,
};