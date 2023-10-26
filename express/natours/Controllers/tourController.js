const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkTourId = (req, res, next, val) => {
  //param middleware callback
  console.log(`tour id is ${val}`);
  if (req.params.tourId * 1 > tours.length || req.params.tourId * 1 < 1) {
    return res.status(404).json({
      status: "error",
      data: {
        tour: "tour not found",
      },
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: "error",
      message: "please provide a name or price",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",

    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  console.log(newTour);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) console.log(err);
      res.status(201).json({
        stats: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.getTour = (req, res) => {
  const tourId = req.params.tourId * 1; //changes string to number
  const tour = tours.find((ele) => ele.id === tourId);
  console.log(tourId);
  res.status(200).json({
    status: "success",
    data: {
      tour: tour,
    },
  });
};

exports.updateTour = (req, res) => {
  const tourId = req.params.tourId * 1; //changes string to number
  console.log(tourId);
  res.status(200).json({
    status: "success",
    data: {
      tour: `updated tour with the id ${tourId}`,
    },
  });
};

exports.deleteTour = (req, res) => {
  const tourId = req.params.tourId * 1; //changes string to number
  console.log(tourId);
  res.status(200).json({
    status: "success",
    data: {
      tour: `deleted tour with the id ${tourId}`,
    },
  });
};
