var express = require("express");
var app     = express();
var path    = require("path");

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar("a282a5107935477188bf1aa8548def43");

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");
//-----------------------------------------------------------------------//
								/////////////////////////
								/// Direcrory Loading ///
								/////////////////////////
app.use(express.static(__dirname + './View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + './css'));
//Stores all CSS.
app.use(express.static(__dirname + './js'));
//Stores all Javascript

//-----------------------------------------------------------------------//
								/////////////////////////
								///// File Location /////
								/////////////////////////
app.get('/',function(req,res){
  res.sendfile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/TFILogo.gif',function(req,res){
	res.sendfile('./TFILogo.gif');
});

app.get('/css/main.css',function(req,res){
  res.sendfile('./css/main.css');
});

app.get('/css/style.css',function(req,res){
	res.sendfile('./css/style.css');
});

app.get('/js/bootstrap-4.0.0.js',function(req,res){
	res.sendfile('./js/bootstrap-4.0.0.js');
});

app.get('/js/jqurey-3.2.1.min.js',function(req,res){
	res.sendfile('./js/jqurey-3.2.1.min.js');
});

app.get('/js/popper.min.js',function(req,res){
	res.sendfile('./js/popper.min.js');
});

app.get('/about',function(req,res){
  res.sendfile('./View/About.html');
});

app.get('/css/about.css',function(req,res){
  res.sendfile('./css/about.css');
});

app.get('/developers',function(req,res){
  res.sendfile('./Developers.html');
});

app.get('/css/develop.css',function(req,res){
  res.sendfile('./css/develop.css');
});

app.get('/blog',function(req,res){
  res.sendfile('./Blog.html');
});

app.get('/css/blog.css',function(req,res){
  res.sendfile('./css/blog.css');
});

app.get('/application',function(req,res){
  res.sendfile('./Application.html');
});

app.get('/css/application.css',function(req,res){
  res.sendfile('./css/application.css');
});

app.get('/TFILogo.svg',function(req,res){
	res.sendfile('./TFILogo.gif');
});

app.get('/iglogo.png',function(req,res){
	res.sendfile('./iglogo.png');
});

app.listen(80);

console.log("Running at Port 80");
