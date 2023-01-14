const os = require('os');
const express = require('express');

const app = express();

app.use(express.static("../gol"));

app.get("/", function(req, res){
    res.redirect("index.html");
 });
 

app.get("/name/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });
 
 app.get("/google/:search", function(req, res){
    let search = req.params.search;
    res.redirect('https://www.google.com/search?q=' + search);
 });

app.listen(3000, function(){
    console.log('i started');
});

app.get("/*/", function(req, res){
    res.status(404).send('404 not found');
 }); 
