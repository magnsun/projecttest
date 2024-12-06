const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the schema for a transaction
const TransactionSchema = new Schema({
    transaction: { type: Number, required: true },
    Mouths: { type: Date, required: true },
    Money: { type: Number, required: true }
});

// Exports the model so it can Transactions in other files
module.exports = mongoose.model('transaction', TransactionSchema);