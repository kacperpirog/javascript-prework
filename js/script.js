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

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage ('Przegrywasz!');
    } else if(argComputerMove == 'Papier' && argPlayerMove == 'kamień'){
        printMessage(' wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz!');
    } else if(argComputerMove == 'Papier' && argPlayerMove == 'nożyce'){
        printMessage(' wygrywasz!');
    } else if(argComputerMove == 'Kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('remis')
    } 
  }

  displayResult(computerMove, playerMove);
  console.log (displayResult);
  