const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const productRout = require('./routes/product.route')
const reviewRout = require('./routes/review.route')

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log("Connected Successfully");
})
.catch((err)=>{
    console.error(err);  
})


app.engine('ejs', ejsMate);  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //views folder
app.use(express.static(path.join(__dirname, 'public')));//public folder
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method')) //to override the data of the db whic is changed through edit
// seeding database
//seedDB()

app.use(productRout) //so that har incoming requrset ke bad chk kiya jae
app.use(reviewRout);

app.listen(8000, ()=>{
    console.log("server connected at port 8000");  
})

