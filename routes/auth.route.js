const express = require('express');
const router = express.Router(); // mini instance
const passport = require('passport')
const User = require('../models/user.model');
const { route } = require('./product.route');

router.get('/register', (req,res)=>{
    res.render('auth/signup');
})

router.post('/register', async(req, res)=>{
    let {username, email, password} = req.body;
    let user = new User({username,email});
    const newUser = await User.register(user, password);
    res.redirect('/login');
})


//to login form
router.get('/login', (req, res)=>{
    res.render('auth/login');
})

//to actually login
router.post('/login',
    passport.authenticate('local', 
        { 
            failureRedirect: '/login', 
            failureMessage: true 
        }),
    function(req, res) {
        res.redirect('/products');
    }
)
module.exports = router

//to logout 
router.get('/logout', (req, res)=>{
    ()=>{
        req.logout();
    }
    res.redirect('/login');
})