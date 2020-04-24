// JSnack 8:Scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato
// Creo una funzione per capire se una parola è palindroma.
function palincroma(parola) {
    var array = parola.split('');

}
// Chiedo all'utente una parola
var parola = prompt('Inserisci una parola: ', 'anna' )
// visualizzo tale parola
console.log('la parola inserita è: ' + parola);
// valuto se la parola è palincroma
if (palincroma()) {
    // Stampo un messaggio con il risultato ottenuto
    console.log('la parola inserita è: palincroma');
} else {
    // Stampo un messaggio con il risultato ottenuto
    console.log('la parola inserita non è: palincroma');
}


// Brainstorming
// split--> array
// reverse sull array
// if palora inserita= array
// join sul l array
