import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const runGameOfEven = () => {
  console.log('brain-even\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let count = 1;
  while (count <= 3) {
    const num = getRandomNumber(1, 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!'); count += 1;
    } else if (num % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${name}!`); count += 10;
    } else if (num % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${name}!`); count += 10;
    } else {
      console.log('this is wrong answer ;(.'); count += 10;
    }
  }
  if (count === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default runGameOfEven;
