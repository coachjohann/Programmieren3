function main(){
    const socket = io();

    let chatDiv = document.getElementById('chat');
    let button = document.getElementById('send_btn');
    let input = document.getElementById('input_message');
    
    function handleSubmit(){
        console.log("button geklickt", input.value);
        let msg = input.value;
        if(msg !== ""){
            socket.emit('send message', msg);
            input.value = "";
        }
    }
    
    button.onclick = handleSubmit;
    
    function handleMessage(msg){
        let p = document.createElement('p');
        p.innerText = msg;
        p.classList.add('chat_p');
        chatDiv.appendChild(p);

    }

    // socket.on('display message', data); // client hört Nachrichten vom Server
    socket.on('display message', handleMessage);
    
    // socket.emit('send message', data); // client schickt an Server


}

window.onload = main;