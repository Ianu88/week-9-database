const bcrypt = require("bcrypt")

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

module.exports ={
    hashPass:hashPass,
}