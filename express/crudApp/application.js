const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();

app.use(express.json())

const users=[
    {
        name:"nithesh",
        email:"nithesh@gmail.com",
        age:30
    },
    {
        name:"nithish",
        email:"nithish@gmail.com",
        age:31
    },
    {
        name:"nithil",
        email:"nithil@gmail.com",
        age:32
    },
    {
        name:"prithivi",
        email:"prithivi@gmail.com",
        age:33
    }
]
// console.log(JSON.stringify)

//retriving the data
app.get('/',(req,res)=>{
    res.send(users)
})

app.get('/:email',(req,res)=>{
    console.log(req.params)
    const email=req.params.email;
    let user=users.filter((user)=>user.email===email)
    res.send(user)
})

//creating a data

app.post('/',(req,res)=>{
    console.log(req.params)
    const data={"name":req.query.name,"email":req.query.email,"age":req.query.age}
    users.push(data)
    res.send(`${req.query.name} with the email ${req.query.email} added successfully`)
})


//updating a data

app.put('/:email',(req,res)=>{
  
    let email=req.params.email;
    const adduser=users.find((user)=>user.email===email)
    const age=req.query.age;
    console.log(age);
    if(adduser){        
        adduser.age=age;
        res.send(`${adduser.name} altered with new age ${age} successfully`)
    }
    else{
        res.send("user not found")
    }

})

//Deleting a data 

app.delete('/:email',(req,res)=>{
    const email=req.params.email;
    const user=users.find((user)=>user.email===email)
    if(user){
        let userIndex = users.indexOf(user)
        users.splice(userIndex,1)
        res.send(JSON.stringify(users))
    }
    else{
        res.send("user not found")
    }
})


//authenticating using jwt token

app.post('/login',(req,res)=>{
    const user={
        username:req.body.name,
        email:req.body.email
    }
    console.log(JSON.stringify(user ));
    jwt.sign(user,'secretkey',(err,token)=>{
        res.json({
            token,
            user:user
        })
        
    })
})


//verifying the token 

app.post('/dashboard',verifytoken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authdata)=>{
        if(err){
            res.send(403)
        }
        else{
            res.json({
                message:"welcome to dashboard",
                authdata
            })
        }
    })
})



function verifytoken(req,res,next) {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader != 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token=bearerToken
        next()
    }
    else{
        res.sendStatus(403);
    }
}
app.listen(3000)