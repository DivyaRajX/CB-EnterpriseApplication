const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  //cookie: { secure: true }
}))


app.get('/', (req, res)=>{
    res.send("Swagat krte hai")
})


app.get('/viewcount', (req, res)=>{
    if(req.session.count) req.session.count += 1;
    else req.session.count = 1;

    res.send(`you visited this website about ${req.session.count} times`)
})


app.get('/setname', (req, res)=>{
    req.session.username = 'divya raj varshney'
    res.redirect('/greet')
})

app.get('/greet', (req, res)=>{
    let{username = 'anonymous'} = req.session;
    res.send(username);
})
 

app.listen(3000, ()=>{
    console.log("Connected to port 3000. ");
    
})