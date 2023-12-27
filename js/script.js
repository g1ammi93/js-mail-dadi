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

})


/* Esercizio 2

-Invento una lista di mail
-Chiedo all'utente la mail che vuole usare
-Controllo che la mail sia nella lista
-Stampo un messaggio di successo o di errore */

const acceptedMail = ['pinco@pallino.it' , 'pippo@pluto.it' , 'pape@rino.it']
const form = document.getElementById('form')
const buttonMail = document.getElementById('buttonMail')
const input = document.getElementById('input')
const resultMail = document.getElementById('resultMail')

//Click del bottone

buttonMail.addEventListener('click' , function () {
    const userMail = input.value.trim();
    console.log(userMail)

//Validazione

    if(!userMail){
        alert('non hai inserito nessuna mail')
        return
    }

    let isAllowedMail = false


    //controllo mail

    for(let i = 0; i < acceptedMail.length; i++) {
console.log('mail controllata: ' , acceptedMail[i])
console.log('mail utente: ', userMail);

        if (userMail === acceptedMail[i]) {
console.log('trovata')
isAllowedMail = true
        }
    }

//Risultato

    if(isAllowedMail){
        buttonMail.classList.add('d-none')
        input.classList.add('d-none')
        resultElement.innerText = 'Email Accettata'
    } else {
        input.classList.add('is-invalid')
        resultElement.innerText = 'Email rifiutata'
    }
});




