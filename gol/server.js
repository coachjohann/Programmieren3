const express = require('express');
const app = express();

const utils = require('./utils');
const Grass = require('./grass');
const Grazer = require('./grazer');
const Predator = require('./predator');


app.listen(3000, function(){
    console.log("Der Server läuft auf port 3000");
    console.log("Starte Spiel...");
    initGame();
    setInterval(updateGame, fr);
});

matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0]
 ];

let side = 20;
let fr = 1000;

//Liste der Lebewesen
grassArr = [];
grazerArr = [];
predArr = [];

function getRandMatrix(b, h){
    let matrix = [];
    for(let y = 0; y < h; y++){
        matrix[y] = [];
        for(let x = 0; x < b; x++){
            matrix[y][x] = Math.round(utils.getRandomInt(0,2));  
        }
    }
    return matrix;
}

function initGame(){
    // matrix = getRandMatrix(10,15);
    // matrix[12][8] = 2;  
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                let grasObj = new Grass(x, y);
                grassArr.push(grasObj);
            }else if(matrix[y][x] == 2){
                let grasfresser = new Grazer(x,y);
                grazerArr.push(grasfresser);
            }
        }
    }
    console.log("Game init - done");
 }

 function updateGame(){
   
    for(let i=0; i<grassArr.length; i++){
        let grasObj= grassArr[i];
        grasObj.mul(); 
    }

    for(let i=0; i< grazerArr.length; i++){
        let grasfresser = grazerArr[i];
        grasfresser.eat();
        grasfresser.mul();
    }
    console.log(matrix);
 }

