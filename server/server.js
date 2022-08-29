require("dotenv").config();
const setup = require("./setup");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

setup(app, server);
