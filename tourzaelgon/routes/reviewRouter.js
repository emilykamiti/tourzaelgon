const express = require('express');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, reviewController.getAllReviews)
  .post(authController.protect, reviewController.createReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    reviewController.updateReview,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    reviewController.deleteReview,
  );

module.exports = router;
