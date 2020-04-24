// JSnack 9: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno
// creo una funzione per vedere se un numero è pari o dispari
function pari(numero) {
    var resto = numero % 2;
    if ( resto == 0) {
        return true; // se è pari mi restituisce true
    } else {
        return false; // se è dispari mi restituisce false
    }
}
// creo una funzione per stampare in console
function stampa(cosa_voglio_stampare) {
    console.log(cosa_voglio_stampare);
}
// chiedo all utente un numero da 1 a 5
var giocata_utente = parseInt(prompt('Scrivi un numero da 1 a 5: '));
// valuto che il dato inserito dall utente sia corretto altrimenti richiedo l inserimento
if (isNaN(giocata_utente)== true || giocata_utente > 5 || giocata_utente < 1) {
    location.reload();
}
// stampo il valore di giocata_utente
// console.log(giocata_utente);
// stampo il valore di giocata_utente usando la funzione stampa
stampa('l\'utente ha inserito il numero: ' + giocata_utente);
// genero un numero random da 1 a 5
var giocata_pc = Math.floor(Math.random() * 5) + 1;
// stampo il valore di giocata_pc
// console.log(giocata_pc);
// stampo il valore di giocata_pc usando la funzione stampa
stampa('il pc ha scelto casualmente il numero : ' + giocata_pc);
// chiedo all utente di scegliere da pari e dispari
var pari_o_dispari = prompt('Scegli tra pari e dispari (scrivi pari se scegli pari e dispari se scegli dispari): ');
// stampo la scelta dell utente
stampa('l\'utente ha scelto: ' + pari_o_dispari);
// valuto che il dato inserito dall utente sia corretto altrimenti richiedo l inserimento
if (pari_o_dispari  != 'pari' && pari_o_dispari  != 'dispari') {
    location.reload();
 }
// faccio la somma dei due numeri (giocata utente + giocata pc)
var somma = giocata_utente + giocata_pc;
// stampa la somma
// console.log(somma);
// stampa la somma usando la funzione stampa
stampa('la somma ha il valore di: ' + 'numero utente + numero pc uguale a: ' + somma);
// verifico che la somma sia pari o dispari richiamando la funzione pari e visualizzo l output con la funzione stampa
if (pari(somma)== true) {
    somma_pari = 'la somma è pari';
    stampa(somma_pari);
    somma_pari = 'pari';
} else {
    somma_dispari = 'la somma è dispari';
    stampa(somma_dispari);
    somma_dispari = 'dispari';
}
// comunico all utente se ha vinto o perso in base al fatto se abbia indovinato se la somma sia pari o dispari
// for (var i = 0; i < 2; i++) {
//
// }
// if (pari_o_dispari == somma_pari ) {
//     stampa('Utente vince');
// } else {
//     stampa('Utente perde');
// }

// if (pari_o_dispari == somma_dispari ) {
//     stampa('Utente vince');
// } else {
//     stampa('Utente perde');
// }
