const express = require('express');
const router = express.Router();
const budgetController = require('../controller/budgetController');

// Defines the routes for CRUD operations
router.post('/', budgetController.createBudget);
router.get('/', budgetController.getBudget);
router.put('/:id', budgetController.updateBudget);
router.delete('/:id', budgetController.deleteBudget);

// Exports the router so it can be used in app.js
module.exports = router;