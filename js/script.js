console.log ('JS ok')

// Esercizio 1

/* 1- Genere un numero random da 1 a 6
   2- Assegno il numero random sia al giocatore che al computer
   3- Creo un pulsante per tirare i dadi
   4- Scelgo il vincitore del tiro in base al numero più alto
*/

// Recupero gli elementi in pagina

const button = document.getElementById('button')
const resultElement = document.getElementById('result')


//Creo i numeri random

button.addEventListener('click' , function () {
    const playerNumber = Math.floor(Math.random() * 6) + 1;
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    console.log(playerNumber, pcNumber);

//Messaggio se non si verificano le condizioni

let message = 'Pareggio';

//Condizioni di vittoria

if (playerNumber > pcNumber) {
    message = 'Hai vinto';
} else if (playerNumber < pcNumber) {
message = 'Hai perso';
}

//Scrivo in pagina

const result = `
<p>Risultato Giocatore: ${playerNumber}<p>
<p>Risultato Cpu: ${pcNumber}<p>
<p><strong>${message}<strong><p>
`

resultElement.innerHTML = result;

}
)