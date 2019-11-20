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
  console.log(req.session);

  var u = User({
    Name : req.body.Name,
    Email: req.body.Email,
    Problem: req.body.Problem,
    Problem_desc: req.body.Problem_desc,
    Address: req.body.Address,
    Contact: req.body.Contact,
    Latitude: req.body.Latitude,
    Longitude: req.body.Longitude,
    Type: req.body.Type
  });
  console.log(u);
  u.save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("problem added");
});

module.exports = complaintRoutes;