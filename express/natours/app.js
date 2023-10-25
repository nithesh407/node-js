
const express = require('express');
const morgan = require('morgan');
const app = express();
const userRouter = require('./routes/userRoutes')
const tourRouter = require('./routes/tourRoutes')
app.use(morgan('dev'))

app.use(express.json()); //middle ware between the request and the response


app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)


module.exports =app;