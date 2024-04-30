
const jwt = require('jsonwebtoken')
require("dotenv").config()

exports.auth = (req,res,next)=>{
    try{
        //extract jwt token
        //Pending :other ways to fetch token

        const token =  req.body.token || req.cookies.token;

        if(!token){
            return res.status(401).json({
                success:false,
                meassage:"token missing"
            })
        }
        //verify the token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            //why this?
            req.user = decode;
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:"token is invalid"
            })
        }
        next();




    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong, while verifying the token"
        })
    }
}

