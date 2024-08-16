const express = require('express');
const { getAllTours, getTour, createTour, updateTour, deleteTour /*, checkID, checkBody */ } = require('../controllers/tourController')

const router = express.Router();                // real middleware

// router.param('id', checkID);

router
    .route('/')
    .get(getAllTours)
    .post(createTour) // add middleware to check name and pricing body

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

module.exports = router;