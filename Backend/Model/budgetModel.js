const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the schema for a budget
const BudgetSchema = new Schema({
    budget: { type: Number, required: true },
    budgetGoal: { type: Number, required: true }
});

// Exports the model so it can budget in other files
module.exports = mongoose.model('Budget', BudgetSchema);