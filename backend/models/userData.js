const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userData = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

// userData.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userData.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };


module.exports = mongoose.model('userData', userData);