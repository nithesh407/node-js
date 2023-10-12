const express = require('express')

const app = express();

const port = 3000

app.use(middleware)

app.get('/',(req,res)=>{
    res.send('Express server started')
})

// app.get('/:id',(req,res)=>{
//     res.send('Express server started with id no :'+req.params.id)
// })

app.get('/users',auth,(req,res)=>{
    console.log(`the request admin is ${req.admin}`)
    res.send('users page')
})

function middleware(req,res,next) {
    console.log("middleware is started at :"+req.url)
    next();
    console.log("after middleware")
}

function auth(req,res,next) {
    if(req.query.admin==="true"){
        req.admin=true;
        next();
    }
    else{
        res.send("Not auth user")
    }   
}

app.listen(port,()=>{
    console.log("server started")
})

