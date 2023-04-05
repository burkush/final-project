const express = require('express');
const app = express();
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const corsOptions = require('./config/cors/corsOptions');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
const connectDB = require('./config/database/dbConnection');
connectDB();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());

app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

app.all('*', (req, res) => {
  if (req.accepts('json')) {
    res.json({ message: 'Resource not found' });
  } else {
    res.type('txt').send('Resource not found');
  }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to the database');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  console.log(err);
  const message = `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`;
  logEvents(message, 'dbErrors.log');
});
