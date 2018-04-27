var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require('request');



app.get("/", function(req, res) {
  console.log('root access requested');
  res.sendFile(__dirname + "/client/main.html");
});