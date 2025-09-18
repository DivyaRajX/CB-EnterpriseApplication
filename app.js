const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const connectFlash = require('connect-flash')  // flash messages 
const session = require('express-session')// 
const passport = require('passport');
const localStrategy = require('passport-local') //auhtentication
const User = require('./models/user.model')



const productRout = require('./routes/product.route')
const reviewRout = require('./routes/review.route')
const authRout = require('./routes/auth.route');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log("Connected Successfully");
})
.catch((err)=>{
    console.error(err);  
})

let configSession  = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}

app.engine('ejs', ejsMate);  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //views folder
app.use(express.static(path.join(__dirname, 'public')));//public folder
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method')) //to override the data of the db whic is changed through edit
app.use(connectFlash());
app.use(session(configSession)); //seesion for cokkies
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new localStrategy(User.authenticate()));



// seeding database
//seedDB()

app.use(productRout) //so that har incoming requrset ke bad chk kiya jae
app.use(reviewRout);
app.use(authRout);
app.listen(8000, ()=>{
    console.log("server connected at port 8000");  
})