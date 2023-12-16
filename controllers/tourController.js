const Tour = require('./../models/tourModel');


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
exports.createTour = async (req, res) => {
try {

  // CREATE DOCUMENT
  const newTour = await Tour.create(req.body);
  
  // EQUIVELANT TO:
  // const newTour = new Tour({});
  // newTour.save();
  
  res.status(200).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
} catch (err) {
  // BAD REQUST
  res.status(400).json({
    status: 'error',
    message: "INVALID DATA SEND",
  });
}
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
