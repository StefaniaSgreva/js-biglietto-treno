/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Il biglietto andrà stampato in pagina! 

x Chiedere utente numero km che vuole percorrere
x Chiedere utente età passeggero

x prezzo del biglietto = 1km * 0,21€
minorenni < 18 sconto 20%
over 65 > sconto 40%

output prezzo finale max due decimali centesimi prezzo

biglietto stampato in pagina
*/

"use strict"; 

let tripKm = parseInt(prompt('Quanti km devi percorrere ?'));
let userAge = parseInt(prompt('Quanti anni ha il passeggero ?'));

console.log(tripKm, userAge);

console.log(isNaN(tripKm), isNaN(userAge));
if(isNaN(tripKm) || isNaN(userAge)){
    alert('Devi inserire vaolri numerici !');
}

const costPerKm = 0.21;
const ticketCost = costPerKm * tripKm;

console.log(ticketCost);

const underage = ticketCost / 100 * 80;
const over = ticketCost / 100 * 60;

console.log(underage, over);