import readlineSync from 'readline-sync';
import { getRandomNumber } from './index.js';

console.log('brain-progression\nWelcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

let count = 1;
while (count <= 3) {
  const arr1 = [];
  const arr2 = [];
  let arrItem = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 6);
  const missedNumber = getRandomNumber(1, 9);
  for (let i = 0; i < 10; i += 1) {
    arr1.push(arrItem);
    arrItem += step;
  }
  for (const item of arr1) {
    arr2.push(item);
  }

  arr2[missedNumber] = '..';
  const progressionQuestion = arr2.join(' ');
  const rightAnswer = arr1[missedNumber];
  console.log(`Question: ${progressionQuestion}`);
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
  console.log('Congratulations, ' + name + '!');
}
