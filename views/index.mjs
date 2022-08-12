import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const isAlice = await ask.ask(
  'Are you Alice',
  ask.yesno
)

const who = isAlice ? 'Alice' : 'Bob';

console.log(`Welcome to the Fortune Telling App as ${who}`);

let acc = null;
const createAcc = await ask.ask(
    `Would you like to create an account? (only possible on devnet)`,
    ask.yesno
);

if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
    const secret = await ask.ask(
        'Enter your secret key',
        (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`Your contract is deployed as = ${JSON.stringify(info)}`);
    });
} else {
    const info = await ask.ask(
        'Please paste the contract information: ',
        JSON.parse
    );
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance before is ${before} ${stdlib.standardUnit}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
    console.log('There was a Timeout!');
    process.exit(1)
};

if (isAlice) {
    interact.fortunePrice = async () => {
        const amt = await ask.ask(
          'How much would you like to pay to get a Fortune?',
          stdlib.parseCurrency
        );
        console.log(`Alice is paying ${fmt(amt)} ${stdlib.standardUnit} for the fortune`);
        return (amt);
      },
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 } [stdlib.connector];	
};

    interact.acceptPayment = async (amt) => {
        console.log(`Alice made a payment of ${fmt(amt)} ${stdlib.standardUnit}`);
    };

const fortunes = [
  'You will be rich and famous',
  'You will be a billionaire',
  'You will be a Millionaire',
];

interact.showFortune = (fortune) => {
    console.log(`Bob read the fortune`);
    console.log(`Your fortune is: ${fortune}`);
}

interact.showDecision = (decision) => {
    if (!decision) {
      console.log(`Alice rejected the Fortune`);
    }else {
      console.log(`Alice accepted the Fortune`)
    }
}

interact.getDecision = async () => {
    const choice = await ask.ask(
      `Do you accept the fortune? (y/n)`,
      ask.yesno
    );
    if (!choice) {
      console.log(`You rejected the Fortune, Bob will read another Fortune`);
    }else {
      console.log(`You accepted the Fortune, payment will be made into Bob's wallet`)
    }
    return choice;
  };

  interact.readFortune = async () => {
    const num = await ask.ask(
      'Pick a fortune number between 0 t0 2?',
      (x) => {
        const num = parseInt(x);
        if(num < 0 || num > 2) {
          throw new Error(`${num} is not a valid fortune number, pick again`);
        }
        return num;
    });
    console.log('You are reading the fortune');
    const fortune = fortunes[num];
    console.log(`The fortune is: ${fortune}`);
    return fortune;
    };

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

console.log('Goodbye, Alice and Bob!');
ask.done();
