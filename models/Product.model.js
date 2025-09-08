const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    img : {
        type : String,
        trim : true,
        //default
    },
    price : {
        type : Number,
        required : true,
        min : 0
    },
    desc :{
        type : String,
        trim : true
    }
})

let Product = mongoose.model("Product", productSchema)

module.exports = Product;