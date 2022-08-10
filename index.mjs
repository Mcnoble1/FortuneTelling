import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!, Welcome to the Fortune Telling App');

const fortunes = [
  'You will be rich and famous',
  'You will be a billionaire',
  'You will be a Millionaire',
];

const decision = ['False', 'True'];


console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    fortunePrice: () => {
      const price = stdlib.parseCurrency(10);
      console.log(`Alice is paying ${stdlib.formatCurrency(price)} ${stdlib.standardUnit} for the fortune`);
      return stdlib.formatCurrency(price);
    },
    // implement Alice's interact object here
    getDecision: () => {
      const choice = Math.floor(Math.random() * decision.length);
      if (choice == 0 ) {
        console.log(`Alice rejected the Fortune`);
      }else {
        console.log(`Alice accepted the Fortune`)
      }
      return choice;
    },
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    readFortune: () => {
      console.log('Bob is reading the fortune');
      const fortune = fortunes[Math.floor(Math.random() * fortunes.length)]; // random fortune
      console.log(`The fortune is: ${fortune}`);
    },
    acceptPayment: (amt) => {
      console.log(`Bob accepts the payment of ${amt} ${stdlib.standardUnit}`);
    }
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');
