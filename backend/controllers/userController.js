import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

const authUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if(user && (await user.matchPassword(password))) {
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
});


    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password"});
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async(req, res) => {
  res.send("Register route");
});
 
// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async(req, res) => {
  res.send("Logout route");
});


export {authUser, registerUser, logoutUser}