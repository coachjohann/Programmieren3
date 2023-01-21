let clickcounter =0;

function clickHandler(evt){
    console.log(evt);
    clickcounter++;
    let str = "thanks for clicking" + clickcounter;
    this.innerText = str;
}

let p = document.getElementById("pElement");

p.addEventListener('click', clickHandler);

