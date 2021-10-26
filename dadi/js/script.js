//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const winner = document.getElementById("winner");

//chiedi all'utente un numero tra 1 e 6
const numUser = Math.floor(Math.random() * 6) +1;

console.log("il tuo numero è: ", numUser);


//generare un numero casuale tra 1 e 6 
const numPc = Math.floor(Math.random() * 6) +1;

console.log("il numero casuale è: ", numPc);

//vedere chi ha vinto
let result;

if(numUser>numPc) {
    winner.innerHTML = "hai vinto"
}else if(numUser<numPc) {
    winner.innerHTML = "ha vinto il pc"
}else {
    winner.innerHTML = "PARI!!"
}