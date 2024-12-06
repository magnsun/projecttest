const express = require('express');
const mongoose = require('mongoose');
const routeBudget = require('../Backend/routes/routeBudget');
const routeTransaction = require('../Backend/routes/routeTransaction');
const logger =require('./middleware/logging.js');

const app = express();

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testdatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(logger)
// Middleware for JSON body parsing (without `body-parser`)
app.use(express.json());


app.use('/budget',routeBudget);
app.use('/transaction', routeTransaction);


// Starts the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});