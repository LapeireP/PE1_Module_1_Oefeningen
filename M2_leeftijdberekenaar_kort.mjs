import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question('Wat is jouw geboortejaar?'))
let toekomstJaar = parseFloat(await userInput.question('In welk jaar wil je jouw leeftijd uitrekenen?'))

console.log('In ' + toekomstJaar + ' zal ik ' + (toekomstJaar - geboorteJaar - 1) + ' of ' + (toekomstJaar - geboorteJaar) + ' jaar oud zijn.')
process.exit