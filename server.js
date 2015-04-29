#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var cheerio = require('cheerio');

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

app.get('/blog-posts/', function (req, res) {

  fs.readdir(publicdir + '/blog', function(err, files) {
    files.filter(function(file) {
      return file.substr(-5) === '.html';
    }).forEach(function(file) {
      if (file !== 'index.html') {
        fs.readFile(file, 'utf-8', function(err, contents) {
          $ = cheerio.load(contents);
          
        });
      }
    });
  });

  res.json({  });

});

/*
 *For Azure deployment
 */
//app.listen(process.env.port);

var server = app.listen(3000, function () {
  console.log('Listening on localhost:3000');
});
