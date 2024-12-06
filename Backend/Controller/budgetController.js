const budget= require('../model/budgetmodel');


exports.createBudget = async (req, res) => {
    try {
        const newBudget = new budget(req.body);
        const budgets = await newBudget.save();
        return res.status(200).send(budgets);
    } catch (err) {
        return res.status(500).send(err);
    }
};
exports.getBudget = async (req, res) => {
    try {
        const budgets = await budget.find({});
        return res.status(200).send(budgets);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Updates a Budget
exports.updateBudget = async (req, res) => {
    try {
        const budgets = budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(budgets);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Deletes a Budget
exports.deleteBudget= async (req, res) => {
    try {
        await budget.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'Budget successfully deleted' });
    } catch (err) {
        return res.status(500).send(err);
    }
};