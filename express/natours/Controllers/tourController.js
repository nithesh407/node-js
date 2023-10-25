const fs = require('fs');

const tours= JSON.parse( fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllTours = (req, res) =>{
    res.status(200).json({
        status:'success',
      
        results:tours.length,
        data:{
            tours: tours
        }
    });
}

exports.createTour = (req, res) =>{
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

exports.getTour=(req,res)=>{
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