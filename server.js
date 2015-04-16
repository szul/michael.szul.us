#!/usr/bin/env node

var express = require('express');
var app = express();

/*
 * Serve static content.
 */
app.use('/', express.static(__dirname + '/static')); 

/*
 *For Azure deployment
 */
//app.listen(process.env.port);

var server = app.listen(3000, function () {
  console.log('Listening on localhost:3000');
});
