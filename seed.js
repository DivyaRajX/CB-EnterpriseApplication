const mongoose = require('mongoose')
const Product = require('./models/Product.model')

const products = [
    {
        name : "Iphone 16",
        img : "https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTZ8ZW58MHx8MHx8fDA%3D",
        price : 130000,
        desc : "Very mehenga"
    },
    {
        name : "Macbook",
        img : "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        price : 155000,
        desc : "Thoda zyad mehang h baad main khreedenge"
    },
    {
        name : "Sony Nikon",
        img : "https://images.unsplash.com/photo-1606986628470-26a67fa4730c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
        price :200000,
        desc : "Photograper banunga baad main khreedunga Jane Sreet main"
    },
    {
        name : "Apple Airpods",
        img : "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        price : 20000,
        desc : "Acchi sound quality"
    },
    {
        name : "AirPods Max",
        img : "https://images.unsplash.com/photo-1608148118722-56da485f9e84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D",
        price : 100000,
        desc : "Thoda zada hi accha h"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully");    
}

module.exports = seedDB;