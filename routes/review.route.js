const express = require('express');
const mongoose = require('mongoose');
const router = express.Router(); // mini instance
const Review = require('../models/Review.model');
const Product = require('../models/Product.model')

router.post('/products/:id/review', async(req,res)=>{
    let {id} = req.params;
    let {rating, comment}=req.body;
    const product = await Product.findById(id)
    const review = new Review({rating, comment});
    
    product.reviews.push(review)
    await product.save();
    await review.save();
    res.redirect(`/products/${id}`); 
})

module.exports = router

