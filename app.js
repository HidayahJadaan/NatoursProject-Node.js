// 1. Requiring THe Modeule
const express = require('express');
const fs = require('fs');
// 2. Creating Variable Called app --> Calling express function which holds many methods that we can use it in our app
const app = express();

// CREATE SIMPLE MIDDLEWARE --> it is just a function that can modify the incomming request data (middleware--> in the middle of REQUEST & RESPONSE)
app.use(express.json());

// Reading The Data in form of JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// Creating Our Own API

// HANDLING GET REQUESTS ==> GET --> GET All The Tours

const getAllTours = (req, res) => {
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  }

// HANDLING POST REQUEST ==> POST --> Ctreate A New Tour
const createTour = (req, res) => {
    // we can send data from the client to the server
    // req object: holds the data about all the data in te request, req should has the data
    // Express dose not put that body data in the request --> So, use middleware
  
  //   console.log(req.body);
  const newId= tours[tours.length -1].id +1;
  const newTour = Object.assign({id: newId}, req.body);
  
  tours.push(newTour);
  
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err=>{
  
  // 201 --> DATA IS CREATED
      res.status(201).json({
          status:'success',
          data: {
            tour: newTour,
          },
      })
  });
  //   res.send('DONE...')
  
  }

// GET ONE TOUR (HANDLING URL PARAMAETRS)
const getTour = (req,  res)=>{

    // all the parameters(variables) are stored here --> params
    // console.log(req.params);
    const id = req.params.id * 1; // convert string to a number
    const tour = tours.find(el => el.id === id);
    
    // id > tours.length ==> !tour
    if(!tour){
        return res.status(404).json({
            status: 'ERROR',
            message: 'Tour not found, Invalid ID',
        });
    }
    
    
    res.status(200).json(
        {
            status:'success',
            data: {
             tour,
            },
           
        }
    );
    }

// HANDLING PATCH REQUESTS (UPDATING THE DATA)
const updateTour = (req, res) => {
    if(req.params.id > tours.length){
        return res.status(404).json({
            status: 'ERROR',
            message: 'Tour not found, Invalid ID',
        });

    
    }

    res.status(200).json({
        status:'success',
        data: {
          tour: "<UPDATED TOUR>",
        },
    });
}

// HANDLING DELETE REQUESTS
const deleteTour =  (req, res) => {
    if(req.params.id > tours.length){
        return res.status(404).json({
            status: 'ERROR',
            message: 'Tour not found, Invalid ID',
        });

    
    }
// 204 ==> no content
    res.status(204).json({
        status:'success',
        data: {
          tour: null,
        },
    });
}


app.route('/api/v1/tours').get(getAllTours).post(createTour);
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours/:id', createTour);

app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);
// app.get('/api/v1/tours', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);


// THIS ALWAYS THE LAST STEP
// 3. Listening for The Server
app.listen(3000, () => {
  // This function is called when the server is listening on the port
  console.log('App listening on port 3000 ...');
});
