exports.getAllUsers = (req, res) =>{
    res.status(200).json({
        status:'success',
        data:{
            Users: '<total users>'
        }
    });
}

exports.createUser = (req, res) =>{
    const newUser = req.body;
    console.log(newUser);
    res.status(201).json({
        status:'success',
        data:{
            User: newUser
        }
    })
}  

exports.getUser=(req,res)=>{
    const userId = req.params.userId*1; //changes string to number
        res.status(404).json({
            status:'error',
            data:{
                tour: `user not found for ${userId}`
            }
        })
}