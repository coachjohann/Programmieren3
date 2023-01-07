let matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0]
 ];

let side = 20;
let fr = 4;

//Liste der Lebewesen
let grassArr = [];
let grazerArr = [];
let predArr = [];

function getRandMatrix(b, h){
    let matrix = [];
    for(let y = 0; y < h; y++){
        matrix[y] = [];
        for(let x = 0; x < b; x++){
            matrix[y][x] = Math.round(random(0,1));  
        }
    }
    return matrix;
}

function setup(){
    matrix = getRandMatrix(10,15);
    matrix[12][8] = 2;
    createCanvas(side*matrix[0].length+1, side * matrix.length+1);
    background('#acacac');
    frameRate(fr);
  
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
    

 }

 function draw(){
   
    for(let i=0; i<grassArr.length; i++){
        let grasObj= grassArr[i];
        grasObj.mul(); 
    }

    for(let i=0; i< grazerArr.length; i++){
        let grasfresser = grazerArr[i];
        grasfresser.eat();
        grasfresser.mul();
    }

    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            matrix[y][x];
            fill('white');
            if(matrix[y][x] == 1){
                fill('green')
            }else if(matrix[y][x] == 2){
                fill('yellow')
            }else if(matrix[y][x] == 3){
                fill('red')
            }
            // zeichnen rect
            rect(x*side,y*side,side,side);
        }
    }


 }