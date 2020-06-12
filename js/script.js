// CREARE UNA PASSWORD UTILIZZANDO I DATI UTENTE

// CHIEDERE NOME
var nome = prompt("Inserisci il tuo nome");
// CHIEDERE COGNOME
var cognome = prompt("Inserisci il tuo cognome");
// CHIEDERE COLORE PREFERITO
var colorePreferito = prompt("Inserisci il tuo colore preferito");

// OUTPUT PASSWORD
var nuovaPassword = nome + cognome + colorePreferito + "19";

document.getElementById('new-password').innerHTML = nuovaPassword;
