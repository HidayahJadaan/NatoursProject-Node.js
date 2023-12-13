// 1. Requiring THe Modeule
const express = require('express');
// 2. Creating Variable Called app --> Calling express function which holds many methods that we can use it in our app
const app = express();

// 4. Defining the Route: Routing determines the how an applications response to a certain client request(certain URL==> certain HTTP method that is used in that request)

// variable.httpmethod --> root URL
app.get('/', (req, res) => {
//   SEND DATA BACK
    // res.status(200).send('Hello World From The Server Side');
    res.status(200).json({ message:
        'Hello World From The Server Side', app: 'Natours'});

});


app.post('/', (req, res) => {
    res.send('Hello World From POST Request');
});





  // THIS ALWAYS THE LAST STEP
  // 3. Listening for The Server
  app.listen(3000, () => {
    // This function is called when the server is listening on the port
    console.log('App listening on port 3000 ...');
  });
