
// definizione di variabili
let nome,cognome,anno,number;
// assegnazione dei valori
nome= prompt('inserisci il tuo nome: ');
cognome= prompt('inserisci il tuo cognome: ');
anno= prompt('inserisci il tuo anno di nascita: ');
number = Math.floor(Math.random() * 11);


// stampa a video della password "inaffidabile"
console.log(`la tua password è: ${nome}${cognome}${anno}${number}`);
document.getElementById("password").innerHTML = `${nome}${cognome}${anno}${number}`;