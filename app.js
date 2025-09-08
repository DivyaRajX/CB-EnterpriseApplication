const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed')
const productRout = require('./routes/product.route')


mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log("Connected Successfully");
})
.catch((err)=>{
    console.error(err);  
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //views folder
app.use(express.static(path.join(__dirname, 'public')));//public folder

// seeding database
//seedDB()

app.use(productRout) //so that har incoming requrset ke bad chk kiya jae

app.listen(8000, ()=>{
    console.log("server connected at port 8000");  
})

