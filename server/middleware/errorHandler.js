const { logEvents } = require('./logger');

const errorHandler = (err, req, res, next) => {
  const message = `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`;
  logEvents(message, 'errors.log');
  console.error(err.stack);

  const status = res.statusCode ? res.statusCode : 500;
  res.status(status);
  res.json({ message: err.message });

  next();
};

module.exports = errorHandler;
