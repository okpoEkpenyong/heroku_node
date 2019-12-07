const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookroutes = require('./routes/booksRoute');

// takes care of CORS errors. This should be placed before the routes 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());
  
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.use('/', bookroutes);

module.exports = app;
