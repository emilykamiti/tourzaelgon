const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

// Load environment variables from config.env
dotenv.config({ path: '../../config.env' });

// Connect to the database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.set('strictQuery', false);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DBConnection successful');
  });

// READ JSON FILE
const toursPath = `${__dirname}/tours.json`;
console.log('Tours JSON Path:', toursPath);
const tours = JSON.parse(fs.readFileSync(toursPath, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log('Error loading data:', err.message);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany({});
    console.log('Data successfully deleted');
  } catch (err) {
    console.log('Error deleting data:', err.message);
  }
  process.exit();
};

// Handle command-line arguments for import or delete
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log('Command-line arguments:', process.argv);
