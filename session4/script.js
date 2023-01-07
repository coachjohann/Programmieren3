let clickCounter = 0;

function clickHandler(evt){
    //
    console.log(evt);
    clickCounter++;
    let str = "Thanks for clicking " + clickCounter;
    this.innerText = str;
}

let p = document.getElementById('pElement');
console.log(p);
p.addEventListener("click", clickHandler);


// DOM Event
function bodyClickHandler(evt){
    console.log("Body clicked at: " + evt.pageX + ", " + evt.pageY)
}
window.onclick = bodyClickHandler;

// p5 Ereignisse
function setup(){
    background('#acacac')
}

function mouseClicked(){
    console.log("p5", mouseX, mouseY);
}

