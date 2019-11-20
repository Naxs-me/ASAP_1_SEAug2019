const express = require('express')
const get_complaintRoutes = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
let Complaints = require('../models/complaintData');
get_complaintRoutes.use(cors())

process.env.SECRET_KEY = 'secret';
 
get_complaintRoutes.route('/get').post(function(req, res) {
    console.log("get complaint");
    Complaints.find({Type:"Public"},function(err, complaints){
        return res.send(complaints);
    })
});

module.exports = get_complaintRoutes;