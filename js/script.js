function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

function getMoveName(PlayerMove){
  if(PlayerMove == 1){
    return 'kamień';
  }if(PlayerMove == 2){
    return'papier';
  }if(PlayerMove == 3){
     return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + PlayerMove + '.');
    return 'nieznany ruch';
  }
}
printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(computerMove){
  if(computerMove == 1){
    return 'kamień';
  }if(computerMove == 2){
     return 'papier';
  }if(computerMove == 3){
     return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + computerMove + '.');
    return 'nieznany ruch';
  }
}
printMessage('Mój ruch to: ' + computerMove);

 
function displayResult (argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	return ' wygrywasz!';
} if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
	return 'Przegrywasz!';
} if(argComputerMove == 'Papier' && argPlayerMove == 'kamień'){
  return (' wygrywasz!');
} if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  return ('Przegrywasz!');
} if(argComputerMove == 'Papier' && argPlayerMove == 'nożyce'){
  return (' wygrywasz!');
}  if(argComputerMove == 'Kamień' && argPlayerMove == 'nożyce'){
  return ('Przegrywasz!');
}  if (argComputerMove == argPlayerMove) {
  return ('remis')
}
}


/*
if(playerInput == 1){
  playerMove = 'kamień';
} else if(playerInput == 2){
	playerMove = 'papier';
} else if(playerInput == 3){
	playerMove = 'nożyce';
}
*/

/*
if (randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
}

*/


