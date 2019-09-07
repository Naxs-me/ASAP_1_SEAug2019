const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

//let userData = require('./models/userData.js');

app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);



mongoose.connect('mongodb://localhost:27017/userData', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})

var Users = require('./routes/user')

app.use('/SignUp', Users);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
