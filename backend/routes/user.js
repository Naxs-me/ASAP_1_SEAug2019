const express = require('express')
const signUpRoutes = express.Router();
const cors = require('cors')

let User = require('./../models/userData');
signUpRoutes.use(cors())

process.env.SECRET_KEY = 'secret';

function getUser(u,req,res,callback){
  u = User({
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password
  });

  callback(u,res);
}


signUpRoutes.route('/add').post(function (req, res) {
  console.log("hello");
  var u;
  User.findOne({name: req.body.name}, function(err,user){
    if(user){
      var err = new Error("Name is already taken.");
      err.status = 400;
      res.json({status:false,msg:'User already exists'});
    }
    else{
      getUser(u,req,res,add_user);
      console.log("reached");
      res.json({status: true});
    }
  });

});
function add_user(u,res) {
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("users reached");
  
  
}

module.exports = signUpRoutes;