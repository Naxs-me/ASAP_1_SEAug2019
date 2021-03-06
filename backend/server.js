const express = require('express');
const sessionRoutes = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const PORT = 4000;
const MongoStore = require('connect-mongo')(session);
const path = require('path');

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

/*app.use(express.static(path.join(__dirname, '..','node_react1','build')));
app.get('*', function(req, res) {
  return res.sendFile(path.join(__dirname, '..','node_react1','build', 'index.html'));
});*/
//let userData = require('./models/userData.js');

mongoose.connect('mongodb://localhost:27017/userData', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});

app.use(
  session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: connection
    }),
    cookie: {
      httpOnly: false,
      secure: false,
    }
  })
);

app.get("/cookie", (req, res) => {
  const options = {
    secure: false,
    httpOnly: false,
    domain: ".your.domain.com"
  }
  return res
    .cookie("cookieName", "cookieValue", options)
    .status(200)
    .send("cookie sent")
})

var Users = require('./routes/user')
var login = require('./routes/login')
var complaints = require('./routes/complaint_route')
var get_complaints = require('./routes/get_complaint')
var get_status = require('./routes/get_status')
var Like = require('./routes/Like')

app.use('/SignUp', Users);
app.use('/Login', login);
app.use('/Lodge', complaints);
app.use('/', get_complaints);
app.use('/Status', get_status);
app.use('/',Like);




app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
