let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise initialized")
    },2000)
})

promise
.then((message)=>{
    console.log("promise done " + message)
})
.catch((err)=>{
    console.log(err)
})