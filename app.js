const express = require("express");
const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const blogsRouter = require("./controllers/blogs");
const cors = require("cors");
const mongoose = require("./db/index");

logger.info("connected to", config.MONGODB_URI);

const app = express();

app.set("json spaces", 2);

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.morgan("dev"));

app.use("/api/blogs", blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
