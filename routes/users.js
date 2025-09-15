const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/jwell");

const userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
});

userSchema.plugin(plm); // This adds password, hash, salt, etc.

module.exports = mongoose.model("user", userSchema); // 'user' should be lowercase



// ---------------------------------------------------------------------------------


// const mongoose = require ('mongoose');
// const plm = require ("passport-local-mongoose")
// const express = require('express');
// const userModel = require("./users"); 


// const router = express.Router();


// mongoose.connect("mongodb://127.0.0.1:27017/jwell")


// const userSchema = new mongoose.Schema({
//   username: String,
//   fullname: String,
//   email: String,
//   // password: String, 
  
// })


// userSchema.plugin(plm);
// module.exports = mongoose.model("user", userSchema);