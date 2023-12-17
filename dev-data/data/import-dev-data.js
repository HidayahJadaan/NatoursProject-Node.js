const fs = require('fs');
const mongoose = require('mongoose');
// In order to read config.env file and dfeine the varaiables in our node app
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });
// console.log(process.env);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
//   .connect(DB, {
    // mongoose.connect(DB, { // HOSTED db vERSION
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    // console.log(conn.connections);
    console.log('Connected to the database Successfully');
  });

//   READ JSON FILE

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf8'));

// IMPORT DATA INTO DATAVASE
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully Loaded');
} catch (err) {
    console.log(err);
}
process.exit();
};
// DELETE ALL  PREVIOUS DATA FROM COLLECTION

const deleteData = async () => {
  try {
    await Tour.deleteMany({});
    console.log('Data Successfully Deleted');
} catch (err) {
    console.log(err);
}
process.exit();
};
if(process.argv[2] === '--import'){
    importData();
}

else if(process.argv[2] === '--delete'){
    deleteData();
}

// console.log(process.argv);
// node dev-data/data/import-dev-data.js --import (when specifing delete option/create option) --> in cmd