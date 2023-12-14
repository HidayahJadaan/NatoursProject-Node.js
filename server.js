const app = require('./app');

// START THE SERVER
// THIS ALWAYS THE LAST STEP
// 3. Listening for The Server
app.listen(3000, () => {
    // This function is called when the server is listening on the port
    console.log('App listening on port 3000 ...');
  });
  