const express = require('express');
const router = express.Router(); // mini instance
const Product = require('../models/Product.model')
const Review = require('../models/Review.model')
const {validateProduct} = require('../middleware')



//to show all the products
router.get('/products', async (req, res)=>{
    let products = await Product.find({})
    res.render('products/index', {products})
})

// to show the form of new product
router.get('/product/new', (req, res)=>{
    res.render('products/new');
})

//to actually add the product
router.post('/products', validateProduct, async(req, res)=>{
    const {name , img, price, desc} = req.body;
    await Product.create({name, img, price, desc})
    res.redirect('/products')
})

//to show a particular product
router.get('/products/:id', async(req, res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('products/show', {foundProduct, msg : req.flash('msg')});
})

//form to edit the product
router.get('/products/:id/edit', async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit', {foundProduct})
})

//to update the edit the data in db
router.patch('/products/:id', async(req,res)=>{
    let {id} = req.params;
    let{name, img, price, desc} = req.body;
    await Product.findByIdAndUpdate(id,{name, img, price, desc});
    req.flash('msg', 'product added succeessfully')
    res.redirect(`/products/${id}`);
})

// to delete a product
router.delete('/products/:id', async(req,res)=>{
    let {id} = req.params;

    const product = await Product.findById(id);
    // for(let id of product.reviews){
    //     await Review.findByIdAndDelete(id)
    // }
    
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})
module.exports = router

