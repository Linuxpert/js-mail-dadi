
const findOrNot = document.getElementById("email")

//chiedi l'email all'utente
let mailUser = prompt("Scrivi la tua email");
const mailList = ["simone@gmail.com", "gabriele@gmail.com", "adriano@gmail.com", "loris@gmail.com"];

let mailFind = false;
//cerca l'email dentro alla lista
for(let i = 0; i < mailList.length; i++) {
    if (mailUser === mailList[i] ) {
        mailFind = true;
    }
}
//scrivi in pagina se è stato invitato o se deve andare via
if (mailFind === true) {
    findOrNot.innerHTML = "CIAO, ti invito alla mia bellissima festa "
}else {
    findOrNot.innerHTML = "Vietato intrufolarsi "
}