import e from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";


// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

const authUser = asyncHandler(async(req, res) => {
  res.send("Auth route");
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