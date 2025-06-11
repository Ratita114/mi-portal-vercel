const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('../routes/main');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', mainRoutes);

module.exports = app;