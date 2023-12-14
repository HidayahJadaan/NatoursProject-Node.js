// 1. Requiring THe Modeule
const express = require('express');
const morgan = require('morgan'); //3rd-party middleware
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
// 2. Creating Variable Called app --> Calling express function which holds many methods that we can use it in our app
const app = express();

// READING ENV VARIABLES
if (process.env.NODE_ENV !== 'development') {
  // CREATE SIMPLE MIDDLEWARE --> it is just a function that can modify the incomming request data (middleware--> in the middle of REQUEST & RESPONSE)
  app.use(morgan('dev'));
}

app.use(express.json());
// SERVING STATIC FILES ==> localhost:port/overview.html
app.use(express.static(`${__dirname}/public`));

// CREATE OUR OWN MIDDLEWARE
app.use((re, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  // Define new property in our req object
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
// Mountain The Router
app.use('/api/v1/tours', tourRouter); // use this middleware to a specific route
// =================== USERS =========================
app.use('/api/v1/users', userRouter); // use this middleware to a specific route

// ==================================================
module.exports = app;
