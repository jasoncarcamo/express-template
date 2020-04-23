const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use(helmet());

//Routes start here

module.exports = app;