const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

const app = express();

/**
 * Configuração do body-parser
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

module.exports = { app, port };
