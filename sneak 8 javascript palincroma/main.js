// JSnack 8:Scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato
// Creo una funzione per capire se una parola è palindroma.
function palincroma(parola) {
    // trasformo la parola, stringa,inserita in un array (tramite la funzione .split()) con ogni lettera di tale parola separate da uno spazio(xke lo messo io se no di default separa gli elementi con ,).
    var array = parola.split('');
    //applico la funzione .reverse(), la quale può essere applicata solo ad un array, che ha creato nella riga soprastante,in modo tale da invertire il suo contenuto (nota: ho ancora gli spazi tra ogni singola lettera).
    var controllo_palincroma = array.reverse();
    //applico la funzione .join(), la quale può essere applicata solo ad un array, in modo tale da unire tutti gli elementi di tale array generando una stringa, levando gli spazi tra ogni singola lettera.
    var controllo2_palincroma = controllo_palincroma.join('');
    // controllo se la parola invertita è uguale a quella non invertita.
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
