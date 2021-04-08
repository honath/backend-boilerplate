const express = require("express");
const app = express();

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());

/**
 * Routes
 * format:
 * app.use("/ROUTE", routerVar);
 */

app.use(notFound);
app.use(errorHandler);

module.exports = app;
