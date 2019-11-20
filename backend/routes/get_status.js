const express = require('express')
const get_statusRoutes = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
let Complaints = require('../models/complaintData');
get_statusRoutes.use(cors())

process.env.SECRET_KEY = 'secret';
 
get_statusRoutes.route('/get').post(function(req, res) {
    console.log("get status");
    console.log(req.body.Email);
    Complaints.find({Email:req.body.Email},function(err, complaints){
        return res.send(complaints);
    })
});

module.exports = get_statusRoutes;