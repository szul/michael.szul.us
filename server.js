#!/usr/bin/env node

var express = require('express');
var fs = require('fs');

var app = express();
app.set('views', '/views')
app.set('view engine', 'jade')
 
/*
 * Serve static content.
 */
var publicdir = __dirname + '/static';

app.use(function(req, res, next) {
  if (req.path.indexOf('.') === -1) {
    var file = publicdir + req.path + '.html';
    fs.exists(file, function(exists) {
      if (exists)
        req.url += '.html';
      next();
    });
  }
  else
    next();
});

app.use(express.static(publicdir));

/*
 *For Azure deployment
 */
//app.listen(process.env.port);

var server = app.listen(3000, function () {
  console.log('Listening on localhost:3000');
});
