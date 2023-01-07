const os = require('os');
const Square = require('./module');

let message = "Das Betriebssystem ist ";

function main(){
    console.log(message + os.platform());
    let squareObj = new Square(10);
    console.log("Fläche: ", squareObj.getArea());
}

main();