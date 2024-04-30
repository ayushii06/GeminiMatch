const bcrypt = require('bcrypt');
const User = require('../models/userModel'); // Rename user to User to avoid conflicts
const jwt = require('jsonwebtoken')
require('dotenv').config()


//signup route handler
exports.signup = async (req, res) => {
    try {
        //get all data
        const { name, email, password} = req.body;

        //check if user already exist 

        const existingUser = await User.findOne({ email }); // Rename existinguser to existingUser

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User Already Exists'
            });
        }

        //secure password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error in Hashing Password'
            });
        }

        //create entry for user
        const newUser = await User.create({ // Rename user to newUser
            name,
            email,
          
            password: hashedPassword,
        });

        return res.status(200).json({
            success: true,
            message: 'User Created Successfully'
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again later'
        });
    }
};


//login

exports.login = async (req, res) => {
    try {
        //data fetch 
        const { email, password } = req.body;
        //validation on email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details carefully "
            });
        }
        //check for registered user
        let user = await User.findOne({ email });
        //if not a registered user
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "user is not registered"
            })
        }
        const payload = {
            email: user.email,
            id: user._id,
           
        }

        //verify password & generate a JWT token 
        if (await bcrypt.compare(password, user.password)) {
            //passwor match
            let token = jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: "2h"
                }

            )

            const options ={
                expiresIn:new Date(Date.now()*3*24*60*60*1000),
                httpOnly:true,

            }

            user = user.toObject();
            user.token = token;
            user.password = undefined;

            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"user logged in successfully"
            })

        }
        else {
            //password donot match
            return res.status(403).json({
                success: false,
                message: "Password Incorrect"

            })
        }
    }
catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:'Login Faliure'
    })
    
}
   
    
}