const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createJWT = require("../config/createJWT");


// register
const register = asyncHandler(async (req, res) => {
  try {
      const {  email, password, company } = req.body;

    //    check if the user exist 
       const userExist = await User.findOne({ email });
       if (userExist) {
         return res.status(400).json({
           status: false,
           message: "User already registered!"
         });
       }

    // hashing Password Bcrypt
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword =await bcrypt.hashSync(password, salt);
    // creating new user
    const newUser = new User({
      email,
      password: hashedPassword,    
      company,
    });
      
    const savedUser = await newUser.save();
    const {password:_, ...savedUserData}=savedUser._doc
    res.status(201).json(savedUserData);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: false, message: err.message });
  }
});

//login
const login = asyncHandler(async (req, res) => {
  try {
      const { email, password } = req.body;      
      // check if email exist or not
     const user = await User.findOne({ email });
      if (!user) {         
       return res
         .status(404)
         .json({ status: false, message: "email is not exist!" });
      }         
    // comparing Password Bcrypt
    const isCorrect = await bcrypt.compareSync(password, user.password);
    if (!isCorrect) {
     res.status(401).json("wrong password!")
    }
    
     if (user) {
       createJWT(res, user._id);
       user.password = undefined;
       res.status(200).json(user);
     } else {
       return res.status(401).json({
         status: false,
         message:"wrong with email or password!",
       });
     }
  } catch (error) {
 console.log(error);
 return res.status(400).json({ status: false, message: error.message });
  }
});

module.exports = { register, login};
