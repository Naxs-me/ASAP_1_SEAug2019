const express = require('express')
const complaintRoutes = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
let User = require('../models/complaintData');
complaintRoutes.use(cors())

process.env.SECRET_KEY = 'secret';
 
complaintRoutes.route('/add').post(function(req, res) {
  console.log("hello");

  var u = User({
    Name : 'Nakshatra',
    Email: 'naxs.me@gmail.com',
    Problem: req.body.Problem,
    Address: req.body.Address,
    Contact: req.body.Contact,
    Latitude: req.body.Latitude,
    Longitude: req.body.Longitude
  });
  console.log(u);
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("problem added");
});

module.exports = complaintRoutes;