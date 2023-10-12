const express = require('express')

const app = express();

const port = 3000

app.get('/:id',(req,res)=>{
    res.send('Express server started with id no :'+req.params.id)
})

app.listen(port,()=>{
    console.log("server started")
})