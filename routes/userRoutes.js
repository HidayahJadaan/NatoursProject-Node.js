const  express = require('express');
const userController = require('./../controllers/userController')

const router = express.Router();


// param middleware: is a middleware that only runs for a certain parameter
router.param('id',(req, res, next, value)=>{
  console.log(`User ID is ${value}`);
    next();
  })
  
router.
route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

  module.exports = router;