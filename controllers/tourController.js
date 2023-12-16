const Tour = require('./../models/tourModel');


exports.checkBody = function (req, res, next) {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'ERROR',
      message: 'Please provide a name and a price',
    });
  }
  next();
};

// Creating Our Own API (ROUTES HANDLERS)

// HANDLING GET REQUESTS ==> GET --> GET All The Tours
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
  });
};

// HANDLING POST REQUEST ==> POST --> Ctreate A New Tour
exports.createTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    // data: {
    //   tour: '<NEW TOUR>',
    // },
  });
};

// GET ONE TOUR (HANDLING URL PARAMAETRS)
exports.getTour = (req, res) => {
  // all the parameters(variables) are stored here --> params
  // console.log(req.params);
  const id = req.params.id * 1; // convert string to a number
  res.status(200).json({
    status: 'success',
  });
};

// HANDLING PATCH REQUESTS (UPDATING THE DATA)
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<UPDATED TOUR>',
    },
  });
};

// HANDLING DELETE REQUESTS
exports.deleteTour = (req, res) => {
  // 204 ==> no content
  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};
