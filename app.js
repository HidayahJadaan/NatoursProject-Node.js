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
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

// HANDLING POST REQUEST ==> POST --> Ctreate A New Tour
app.post('/api/v1/tours', (req, res) => {
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

});

// THIS ALWAYS THE LAST STEP
// 3. Listening for The Server
app.listen(3000, () => {
  // This function is called when the server is listening on the port
  console.log('App listening on port 3000 ...');
});
