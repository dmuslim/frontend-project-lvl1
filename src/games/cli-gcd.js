import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const runGameOfGcd = () => {
  console.log('brain-gcd\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const getGreatestCommonDivider = (a, b) => {
    if (!b) {
      return a;
    }
    return getGreatestCommonDivider(b, a % b);
  };

  let count = 1;
  while (count <= 3) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const rightAnswer = getGreatestCommonDivider(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
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
};
export default runGameOfGcd;
