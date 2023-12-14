const fs = require('fs');


// Reading The Data in form of JSON FILE
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
  
  

// Creating Our Own API (ROUTES HANDLERS)

// HANDLING GET REQUESTS ==> GET --> GET All The Tours
exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
  
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  };
  
  // HANDLING POST REQUEST ==> POST --> Ctreate A New Tour
  exports.createTour = (req, res) => {
    // we can send data from the client to the server
    // req object: holds the data about all the data in te request, req should has the data
    // Express dose not put that body data in the request --> So, use middleware
  
    //   console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
  
    tours.push(newTour);
  
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        // 201 --> DATA IS CREATED
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
      }
    );
    //   res.send('DONE...')
  };
  
  // GET ONE TOUR (HANDLING URL PARAMAETRS)
  exports.getTour = (req, res) => {
    // all the parameters(variables) are stored here --> params
    // console.log(req.params);
    const id = req.params.id * 1; // convert string to a number
    const tour = tours.find((el) => el.id === id);
  
    // id > tours.length ==> !tour
    if (!tour) {
      return res.status(404).json({
        status: 'ERROR',
        message: 'Tour not found, Invalid ID',
      });
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  };
  
  // HANDLING PATCH REQUESTS (UPDATING THE DATA)
  exports.updateTour = (req, res) => {
    if (req.params.id > tours.length) {
      return res.status(404).json({
        status: 'ERROR',
        message: 'Tour not found, Invalid ID',
      });
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<UPDATED TOUR>',
      },
    });
  };
  
  // HANDLING DELETE REQUESTS
  exports.deleteTour = (req, res) => {
    if (req.params.id > tours.length) {
      return res.status(404).json({
        status: 'ERROR',
        message: 'Tour not found, Invalid ID',
      });
    }
    // 204 ==> no content
    res.status(204).json({
      status: 'success',
      data: {
        tour: null,
      },
    });
  };
  
