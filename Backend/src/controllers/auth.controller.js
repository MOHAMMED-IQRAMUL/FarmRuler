import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import validateData from "../utils/dataValidator.js";
import { signupSchema,loginSchema } from "../utils/validationSchemas.js";

export const signup = async (req, res) => {
  try {
    const cleanedSignupData  = validateData(signupSchema,req.body,res);
    
    if(!cleanedSignupData){
      return ;
    }
    const { fullName, username, password, gender } = cleanedSignupData;
    
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
    });

    if (newUser) {
      //GENERATE JWT token here
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        message: "Account created successfully"
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const cleanedLoginData  = validateData(loginSchema,req.body,res);
    if(!cleanedLoginData){
      return ;
    }
    const { username, password } = cleanedLoginData;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      message: "Logged In Successfully."
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 }); // cookies are set to ""
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserDetails=async(req,res)=>{
  // Getting the user id from the middleware i.e. authenticateUser.js
  try {
    let userId=req.userId;
    const user=await User.findById(userId).select("-password");
    if(!user){
      res.status(401).json({error: "Invalid userid."})
      return ;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserDetails controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}