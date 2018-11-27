const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

const app = express();

/**
 * Configuração do body-parser
 */
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

module.exports = { app, port };
