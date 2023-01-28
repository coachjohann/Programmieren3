let matrix = [];
let side = 10;


function main(){
    const socket = io();

    socket.on('send matrix', drawMatrix);
}

// einmal bei Programmstart
function setup() {

    createCanvas(50 * side + 1, 50 * side + 1);
    background('#acacac');

}

// wiederholend
function drawMatrix(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            fill('white');
            if (matrix[y][x] == 1) {
                fill("#28764F")
            } else if (matrix[y][x] == 2) {
                fill('#DB960B')
            } else if (matrix[y][x] == 3) {
                fill('#961707')
            }
            rect(x * side, y * side, side, side);
        }
    }
}

window.onload = main();