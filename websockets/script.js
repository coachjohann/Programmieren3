function main(){
    console.log('ready to chat');
    const socket = io();

    let button = document.getElementById('send_btn');
    let input = document.getElementById('input_message')
    let chatDiv = document.getElementById('chat');

    button.onclick = handleSubmit;
    socket.on('display message', handleMessage);


    function handleSubmit(){
        console.log('button geklickt');
        let message = input.value;
        if(message !== ''){
            socket.emit('send message', message);
        }
    }

    function handleMessage(msg){
        let p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
    }
}

window.onload = main;