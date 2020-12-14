const express = require('express');
const app = express();

app.use(require('./Persona'))

module.exports = app;