const mongoose = require('mongoose');


const portfolioSchema = new mongoose.Schema({
    name: String,
    email:String,
    message:String
  },
  {timestamps:true});

  const Portfolio = mongoose.model('Portfolio', portfolioSchema);

  module.exports=Portfolio