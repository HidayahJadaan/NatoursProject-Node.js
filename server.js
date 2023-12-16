const mongoose = require('mongoose');

// In order to read config.env file and dfeine the varaiables in our node app
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
// console.log(process.env);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    // mongoose.connect(DB, { // HOSTED db vERSION
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    // console.log(conn.connections);
    console.log('Connected to the database');
  });

// Environmetn Variable: Gloabal Variable that is used to define environmet which a node app is running(set by express)
// console.log(app.get('env'));
// IN NODE (many environment variables(comes from process core module))


// // CREATING DOCUMENT
// const testTour = new Tour({
//   name: "The Park Camper",
//   price: 997
//   });

// testTour.save().then(doc => {
//   console.log(doc);
// }).catch(err => {
//   console.log('!!!!!!!ERROR!!!!!!', err);
// });


// TO START DEFINING ENVIRONMENT VARIABLE --> NODE_ENV=development nodemon server.js
const port = process.env.PORT || 7000;
// START THE SERVER
// THIS ALWAYS THE LAST STEP
// 3. Listening for The Server
app.listen(port, () => {
  // This function is called when the server is listening on the port
  console.log('App listening on port 3000 ...');
});
