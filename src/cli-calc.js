import readlineSync from 'readline-sync';

console.log('brain-calc\nWelcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    default:
      return number1 - number2;
  }
};

const arr = ['+', '-', '*'];
let count = 1;
while (count <= 3) {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const num3 = getRandomNumber(0, 2);
  const randomOperator = arr[num3];
  const rightAnswer = calculate(num1, num2, randomOperator);
  console.log(`Question: ${num1} ${randomOperator} ${num2}`);
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
export default name;
