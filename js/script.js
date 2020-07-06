function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
let computerMove = `kamień`;
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
let playMove = `papier`;
printMessage('Zagrałem ' + playMove + '! Jeśli Twój ruch to Nożyce, to wygrywasz!')

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}