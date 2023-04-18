// Require the express module and create a new router object
const express = require('express');
const router = express.Router();

// Require the home_controller module
const homeController = require('../controllers/home_controller');

// Define routes using the router object
router.get('/', homeController.home); // GET request for the root URL
router.post('/add', homeController.add); // POST request for adding an item
router.get('/delete', homeController.delete); // GET request for deleting an item

// Export the router object for use in other modules
module.exports = router;