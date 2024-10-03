import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let aantalDagen = parseFloat(await userInput.question('Hoeveel dagen?'))
let aantalUren = parseFloat(await userInput.question('Hoeveel uren?'))
let aantalMinuten = parseFloat(await userInput.question('Hoeveel minuten?'))
let aantalSeconden = parseFloat(await userInput.question('Hoeveel seconden?'))
console.log('Aantal seconden: ' + ((aantalDagen * 60 * 60 * 24) + (aantalUren * 60 * 60) + (aantalMinuten * 60) + aantalSeconden))
process.exit