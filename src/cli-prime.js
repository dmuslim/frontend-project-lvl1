import readlineSync from 'readline-sync';
import { getRandomNumber } from './index.js';
const runGameOfPrime = () => {
  console.log('brain-prime\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  let count = 1;
  while (count <= 3) {
    const number = getRandomNumber(2, 100);
    const rightAnswer = isPrime(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(rightAnswer)) {
      console.log('Correct!'); count += 1;
    } else if (answer !== String(rightAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${name}!`); count += 10;
    } else {
      console.log('this is wrong answer ;(.'); count += 10;
    }
  }
  if (count === 4) {
    console.log(`Congratulations, ${name}!`);
  }
}
export default runGameOfPrime;
