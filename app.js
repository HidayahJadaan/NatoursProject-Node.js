// 1. Requiring THe Modeule
const express = require('express');
const fs =require('fs');
// 2. Creating Variable Called app --> Calling express function which holds many methods that we can use it in our app
const app = express();

// Reading The Data in form of JSON FILE
const tours = JSON.parse(
    
    fs.readFileSync
    (`${__dirname}/dev-data/data/tours-simple.json`));

// Creating Our Own API
app.get('/api/v1/tours', (req,res)=>{
    res.status(200).json({
        status:'success',
        results: tours.length,
        data:
         {
            tours: tours
        }
    })
});



  // THIS ALWAYS THE LAST STEP
  // 3. Listening for The Server
  app.listen(3000, () => {
    // This function is called when the server is listening on the port
    console.log('App listening on port 3000 ...');
  });
