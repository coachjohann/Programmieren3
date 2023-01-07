const express = require('express');
const app = express();

app.use(express.static("/Users/sabine.classnitz/Desktop/Programmieren3-2022/gol_initial/"));

app.get("/", function(req, res){
    res.send("<h1>Hello world...</h1>");
});

app.get("/gol", function(){
    res.redirect("index.html");
})

app.listen(3000, function(){
    console.log("Der Server läuft auf port 3000");
});