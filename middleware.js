const {productSchema, reviewSchema} = require('./schema');
  
const validateProduct = (req, res, next)=>{
    let {name, img, price, desc} = req.body;
    const {err}=productSchema.validate({name, img, price, desc});
    if(err){
        return res.render('errror')
    }

    next();
}


const validateReview = (req, res, next)=>{
    let {rating, comment} = req.body;
    const {err}=productSchema.validate({rating, comment});
    if(err){
        return res.render('errror')
    }

    next();
}


module.exports = {
    validateProduct,
    validateReview
}