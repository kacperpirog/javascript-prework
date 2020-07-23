
function printMessage(msg){
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
const getMoveName = function(PlayerMove){
  if(PlayerMove == 1){
    return rock ;
  }if(PlayerMove == 2){
    return paper;
  }if(PlayerMove == 3){
    return scissors;
  } else {
    printMessage('Nie znam ruchu o id ' + PlayerMove + '.');
    return 'nieznany ruch';
  }
}
const rock = 'Kamień'
const paper = 'Papier'
const scissors = 'Nożyczki'

const playGame = function(playerInput){
  console.log('Gracz klik: ' + playerInput);
  const playerMove = getMoveName(playerInput);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  clearMessages();
  const displayResult = function(argComputerMove, argPlayerMove){
    printMessage('wybrałeś ' + argPlayerMove + ', Komputer wybrał ' + argComputerMove );
    if(argComputerMove == scissors && argPlayerMove == paper){
        printMessage ('Przegrywasz!');
    } else if(argComputerMove == paper && argPlayerMove == rock){
        printMessage(' wygrywasz!');
    } else if(argComputerMove == scissors && argPlayerMove == rock){
        printMessage('Przegrywasz!');
    } else if(argComputerMove == paper && argPlayerMove == scissors){
        printMessage(' wygrywasz!');
    } else if(argComputerMove == rock && argPlayerMove == scissors){
        printMessage('Przegrywasz!');
    } else if(argComputerMove == rock && argPlayerMove == paper){
      printMessage('wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('remis')
    } 
  }
  displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
console.log(playGame);