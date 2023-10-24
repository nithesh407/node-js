const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))

app.use(express.json()); //middle ware between the request and the response

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})


const tours= JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

const getAllTours = (req, res) =>{
    res.status(200).json({
        status:'success',
        requestedAt: req.requestTime,
        results:tours.length,
        data:{
            tours: tours
        }
    });
}

const createTour = (req, res) =>{
    const newId = tours[tours.length-1].id +1;
    const newTour = Object.assign({id:newId},req.body);
    console.log(newTour);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        if(err) console.log(err);
        res.status(201).json({
            stats:'success',
            data:{
                tour:newTour
            }
        })
    })
}    

const getTour=(req,res)=>{
    const tourId = req.params.tourId*1; //changes string to number
    const tour= tours.find(ele => ele.id === tourId);
    if(tour){
        res.status(200).json({
            status:'success',
            data:{
                tour:tour
            }
        })
      
    }else{
        res.status(404).json({
            status:'error',
            data:{
                tour: 'tour not found'
            }
        })
    }
    
}

app.route('/api/v1/tours')
.get(getAllTours)
.post(createTour)

app.route('/api/v1/tours/:tourId')
.get(getTour)




const port=8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});