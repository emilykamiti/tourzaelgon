const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');
const User = require('../../models/userModel');
const Review = require('../../models/reviewModel');
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
const usersPath = `${__dirname}/users.json`;
const reviewsPath = `${__dirname}/reviews.json`;

const tours = JSON.parse(fs.readFileSync(toursPath, 'utf-8'));
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(reviewsPath, 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
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
    await User.deleteMany({});
    await Review.deleteMany({});
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
