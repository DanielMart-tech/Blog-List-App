const logger = require("./logger");
const morgan = require("morgan");

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === "CastError")
    return res.status(400).send({ error: "malformatted id" });
  else if (err.name === "ValidationError")
    return res.status(400).json({ error: error.message });

  next(err);
};

module.exports = {
  morgan,
  unknownEndpoint,
  errorHandler,
};
