const bcrypt = require("bcrypt");
const { boolean } = require("mathjs");
const User = require("../users/models");

const salt=parseInt(process.env.SALT);

const hashPass = async(req,res,next)=>{
    try {
        // step1: hash the password
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        
        // step2: replace password on req.body with hashed password
        req.body.password = hashedPass;

        // step3: use next()
        next();
    } 
    catch (error) {
        res.status(501).json({message: error.message, error: error})
    }
}
const comparePass = async(req,res,next)=>{
    try {
        // step1: find user with username(req.body.username?)
        const user = await User.findOne({ where: { username: req.body.username } });
        // step2: compare the plain text password with he hashed password on the db
        // i.e. bcrypt.compare() - will return true or false
        
        // if false send send response "password does not match 
        // if (){

        // }
        // if true, attach user to
       next(); 
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
    }
}
module.exports ={
    hashPass:hashPass,
    comparePass:comparePass,
};