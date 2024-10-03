// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let som
let getal1 = parseFloat(await userInput.question('Wat is het eerste getal?'))
let getal2 = parseFloat(await userInput.question('Wat is het tweede getal?'))
som = getal1 + getal2
console.log('De som van de twee getallen is ' + som + '.')
process.exit();
