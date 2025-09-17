const express = require('express');
const mongoose = require('mongoose');
const router = express.Router(); // mini instance
const Review = require('../models/Review.model');
const Product = require('../models/Product.model')
const {validateReview} = require('../middleware')



router.post('/products/:id/review', validateReview, async(req,res)=>{
    try{
        let {id} = req.params;
        let {rating, comment}=req.body;
        const product = await Product.findById(id)
        const review = new Review({rating, comment});
        
        product.reviews.push(review)
        await product.save();
        await review.save();
        req.flash('msg', "review added successfully" )
        res.redirect(`/products/${id}`); 
        
    }
    catch(e){
        console.error(err);
    }
})

module.exports = router

