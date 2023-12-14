const express = require('express');
const tourController = require('./../controllers/tourController')
  const router = express.Router();

router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createTour);
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours/:id', createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
// app.get('/api/v1/tours', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

module.exports = router;