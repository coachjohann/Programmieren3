
const Grass = require("./grass.js");
const Grazer = require("./grazer.js");
const Predator = require("./predator.js");
const express = require('express');

const app = express();

let httpServer = require('http').Server(app);

let {Server} = require('socket.io');
const io = new Server(httpServer);

app.use(express.static('./'));

app.get('/', function(req, res){
    res.redirect('index.html');
});






app.get("/", function(req, res){
    
 });

io.on('connection', function(socket){
    console.log('client gestartet auf port 3000');
    io.emit('send matrix', matrix);

})


httpServer.listen(3000, function(){
    console.log('i started');
    initGame();
    setInterval(function (){
        updateGame()
    }, 1000);
});

app.get("/*/", function(req, res){
    res.status(404).send('404 not found');
 }); 







matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 3, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0]
];


let fr = 3;
let side = 10;

// 
 grassArr = [];
 grazerArr = [];
 predArr = [];

// Funktionen definieren
function getRandomMatrix(width, height) {
    // erstellt matrix
    let matrix = [];
    // weitere Arrays erstellen
    for (let y = 0; y < height; y++) {
        // leeres Array in die Matrix speichern
        matrix.push([]);
        // jedes dieser Array - werte rein speichern
        for (let x = 0; x < width; x++) {
            matrix[y][x] = Math.floor(Math.random() * 2);
        }
    }
    return matrix;
}

function createMoreCreatures() {
    // Grasfresser und Fleischfresser
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (x == y) {
                matrix[y][x] = 2;
                if(y+2 < matrix.length && x+2 < matrix[0].length)
                matrix[y+2][x+2] = 2;
            }
            if(x+y == matrix.length-1){
                matrix[y][x] = 3;
            }
        }
    }
}

// einmal bei Programmstart
function initGame() {
    matrix = getRandomMatrix(50, 50);
    createMoreCreatures();

    //createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    //background('#acacac');
    //frameRate(fr);

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            } else if (matrix[y][x] == 2) {
                grazerArr.push(new Grazer(x, y));
            }
            else if (matrix[y][x] == 3) {
                predArr.push(new Predator(x, y));
            }
        }
    }

}

// wiederholend
function updateGame() {

    //update von Grass-Lebewesen
    console.log('send matrix')
    io.emit('send matrix', matrix);

    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }

    for (let i = 0; i < grazerArr.length; i++) {
        grazerArr[i].eat();
    }

    for (let i = 0; i < predArr.length; i++) {
        predArr[i].eat();
        
    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            //fill('white');
            if (matrix[y][x] == 1) {
                //fill("#28764F")
            } else if (matrix[y][x] == 2) {
                //fill('#DB960B')
            } else if (matrix[y][x] == 3) {
                //fill('#961707')
            }
            //rect(x * side, y * side, side, side);
        }
    }



}