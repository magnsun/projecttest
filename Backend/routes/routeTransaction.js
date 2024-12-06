const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transactionController');

// Defines the routes for CRUD operations
router.post('/', transactionController.createTransaction);
router.get('/', transactionController.getTransaction);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

// Exports the router so it can be used in app.js
module.exports = router;