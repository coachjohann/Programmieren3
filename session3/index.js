const os = require('os');
const express = require('express');

const app = express();

let message = 'mein betriebsystem ist';

app.get("/name/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });
 

app.listen(3000, function(){
    console.log('i started');
});
