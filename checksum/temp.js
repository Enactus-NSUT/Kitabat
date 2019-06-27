const http = require('http');
const express = require("express");
const https = require('https');
const qs = require('querystring');
const port = 8080;
const checksum_lib = require('./checksum.js');
const app = express();

var options = {
  host: 'localhost',
  port: 8000,
  path: '/'
};

http.get(options, function(res) {
  var body = '';
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    console.log(body);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
}); 