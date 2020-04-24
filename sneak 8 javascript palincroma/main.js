// JSnack 3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
// chiedo i 5 numeri all utente
// var num0 = parseInt(prompt('Scrivi il primo numero: ' ,0));
// var num1 = parseInt(prompt('Scrivi il secondo numero: ' ,1));
// var num2 = parseInt(prompt('Scrivi il terzo numero: ' ,2));
// var num3 = parseInt(prompt('Scrivi il quarto numero: ' ,3));
// var num4 = parseInt(prompt('Scrivi il quinto numero: ' ,4));
// stampa la somma di tutti i numeri inseriti
// console.log( num0 + num1 + num2 + num3 + num4);

// dichiaro inizzializzando la variabile somma a 0 perche 0 è l ememento neutro dell operazione somma
var somma = 0;
for (var i = 0; i < 5; i++) {
    // chiedo all utente di inserire per 5 volte dei numeri
    var num = parseInt(prompt('Scrivi un numero: '));
    // stampa ogni singolo numero scritto dall utente
    console.log(num);
    // eseguo la somma per 5 volte per ogni numero inserito dall utente e salvo il valore di somma ad ogni singolo addendo
    somma = somma + num;
}
// stampa la somma di tutti i numeri inseriti
console.log(somma);
