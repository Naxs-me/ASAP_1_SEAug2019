const express = require('express')
const signUpRoutes = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let User = require('./../models/userData');
signUpRoutes.use(cors())

process.env.SECRET_KEY = 'secret';

signUpRoutes.route('/add').post(function(req, res) {
  console.log("hello");
  var u = User({
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password
  });
  console.log(u);
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("users reached");
});

module.exports = signUpRoutes;