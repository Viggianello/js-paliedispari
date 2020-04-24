// JSnack 8:Scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato
// Creo una funzione per capire se una parola è palindroma.
function palincroma(parola) {
    var array = parola.split('');
    var controllo_palincroma = array.reverse();
    var controllo2_palincroma = controllo_palincroma.join('');
    if (controllo2_palincroma == parola) {
        return true; // la parola è palincroma
    }
    else {
        return false; // la parola  non è palincroma
    }
}
// Chiedo all'utente una parola
var parola = prompt('Inserisc.i una parola: ', 'anna' )
// visualizzo tale parola
console.log('la parola inserita è: ' + parola);
// valuto se la parola è palincroma
if (palincroma(parola)) {
    // Stampo un messaggio con il risultato ottenuto se è palincroma
    console.log('la parola inserita è: palincroma');
} else {
    // Stampo un messaggio con il risultato ottenuto se  non è palincroma
    console.log('la parola inserita non è: palincroma');
}
// Brainstorming
// split--> array
// reverse sull array
// join sul l array
// if palora inserita= array
