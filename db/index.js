const mongoose = require("mongoose");
const config = require("../utils/config");
const logger = require("../utils/logger");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info("connected to MongoDB"))
  .catch((err) => logger.error("error connecting to MongoDB", err.message));

module.exports = mongoose;
