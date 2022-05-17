import readlineSync from 'readline-sync';

const runGameOfEven = () => {

console.log('brain-even\nWelcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let num = 0;
let count = 1;
while (count <= 3) {
  num = Math.random() * 100;
  const numRounded = Math.round(num);
  console.log(`Question: ${numRounded}`);
  const answer = readlineSync.question('Your answer: ');
  if ((numRounded % 2 === 0 && answer === 'yes') || (numRounded % 2 !== 0 && answer === 'no')) {
    console.log('Correct!'); count += 1;
  } else if (numRounded % 2 !== 0 && answer === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${name}!`); count += 10;
  } else if (numRounded % 2 === 0 && answer === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${name}!`); count += 10;
  } else {
    console.log('this is wrong answer ;(.'); count += 10;
  }
}
if (count === 4) {
  console.log(`Congratulations, ${name}!`);
}
}
export default runGameOfEven;
