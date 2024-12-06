const transaction = require('../model/transactionModel');

exports.createTransaction = async (req, res) => {
    try {
        const newTransaction = new transaction(req.body);
        const transaction = await newTransaction.save();
        return res.status(200).send(transaction);
    } catch (err) {
        return res.status(500).send(err);
    }
};
exports.getTransaction = async (req, res) => {
    try {
        const transactions = await transaction.find({});
        return res.status(200).send(transactions);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Updates a Transaction
exports.updateTransaction = async (req, res) => {
    try {
        const transactions = await transaction.findByIdAndUpdate(req.params.id);
        return res.status(200).send(transactions);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Deletes a Transaction
exports.deleteTransaction= async (req, res) => {
    try {
        await transaction.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'Transaction successfully deleted' });
    } catch (err) {
        return res.status(500).send(err);
    }
};