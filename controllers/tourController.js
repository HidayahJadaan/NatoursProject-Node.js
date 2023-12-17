const Tour = require('./../models/tourModel');


// Creating Our Own API (ROUTES HANDLERS)

// HANDLING GET REQUESTS ==> GET --> GET All The Tours
exports.getAllTours = async(req, res) => {
  try {

    const tours = await Tour.find();
    
    res.status(200).json({
      status:'success',
      results: tours.length,
      data: {
        tours
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'Faild',
      message: err.message,
    });
  }
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
exports.getTour = async (req, res) => {

  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status:'success',
      data: {
        tour,
      },
    });
  }catch(err){
    res.status(404).json({
      status: 'Faild',
      message: err.message,
    });
  }
  // all the parameters(variables) are stored here --> params
  // console.log(req.params);
  // const id = req.params.id * 1; // convert string to a number
  // res.status(200).json({
  //   status: 'success',
  // });
};

// HANDLING PATCH REQUESTS (UPDATING THE DATA)
exports.updateTour = async(req, res) => {
  try{
    
   const tour= await Tour.findByIdAndUpdate(req.params.id, req.body,{
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        tour
      },
    });
  }catch{

    res.status(400).json({
      status: 'error',
      message: "INVALID DATA SEND",
    });
  }
};

// HANDLING DELETE REQUESTS
exports.deleteTour = async (req, res) => {
const tour = await Tour.findByIdAndDelete(req.params.id)

try {

  res.status(200).json({
    status:'success',
    data: {
      tour,
    },
  });
}catch(err){
  
  // 204 ==> no content
  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
}
};
