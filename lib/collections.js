var requirejs = require('requirejs');
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require('request');



app.get("/", function(req, res) {
  console.log('root access requested');
  res.sendFile(__dirname + "/client/main.html");
});


//requireJS
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var foo = requirejs('foo');
var bar = requirejs('bar');

requirejs(['foo', 'bar'],
function   (foo,   bar) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
});

module.exports = function () {};
