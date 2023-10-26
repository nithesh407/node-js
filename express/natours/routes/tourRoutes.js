const express = require('express');

const { getAllTours, createTour, getTour ,updateTour,deleteTour,checkTourId,checkBody} = require('./../Controllers/tourController')
const router = express.Router();

router.param('tourId',checkTourId); //param middleware

router.route('/')
    .get(getAllTours)
    .post(checkBody,createTour) //chaining middlewares

router.route('/:tourId')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

module.exports = router;
