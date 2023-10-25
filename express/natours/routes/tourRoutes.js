const express = require('express');

const {getAllTours,createTour,getTour}=require('./../Controllers/tourController')
const tourRouter = express.Router();

tourRouter.route('/')
.get(getAllTours)
.post(createTour)

tourRouter.route('/:tourId')
.get(getTour)

module.exports = tourRouter