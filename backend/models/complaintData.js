const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let complaintData = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Problem: {
        type: String,
        required: true
    },
    Problem_desc: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        required: true
    },
    Latitude: {
        type: Number,
        required: true
    },
    Longitude: {
        type: Number,
        required: true
    },
    TimeStamp: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: String,
        default: "Pending"
    },
    Type: {
        type: String,
        default: "Public"
    },
    Like: {
        type: Number,
        default: 0
    }
});

// complaintData.getComplaint = function (callback) {
//     User.findOne({ email: email })
//         .exec(function (err, user) {
//             if (err) {
//                 return callback(err)
//             } else if (!user) {
//                 var err = new Error('User not found.');
//                 err.status = 401;
//                 return callback(err);
//             }
//             bcrypt.compare(password, user.password, function (err, result) {
//                 if (result === true) {
//                     return callback(null, user);
//                 } else {
//                     return callback();
//                 }
//             })
//         });
// }


module.exports = mongoose.model('complaintData', complaintData);