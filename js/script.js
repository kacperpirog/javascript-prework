
function printMessage(msg){
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}
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
function playGame(playerInput){
  console.log('Gracz klik: ' + playerInput);
  let playerMove = getMoveName(playerInput);
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('wybrałeś ' + argPlayerMove + ', Komputer wybrał ' + argComputerMove );
    if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage ('Przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage(' wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage(' wygrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
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

  