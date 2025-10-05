const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview , isLoggedIn , isReviewAuthor} = require("../middleware.js");

const review = require("../controllers/reviews.js");

// Post Review route

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(review.createReview)
);

// Delete Review route

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(review.destroyReview)
);

module.exports = router;
