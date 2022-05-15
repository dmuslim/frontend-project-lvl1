import readlineSync from 'readline-sync';
import { getRandomNumber } from './index.js'

console.log("brain-gcd\nWelcome to the Brain Games!");
export const name = readlineSync.question('May I have your name? ');
console.log("Hello, " + name + "!");
console.log('Find the greatest common divisor of given numbers.');

const getGreatestCommonDivider = (a, b) => {
    if (a % b === 0) {
        return b;
    }
    return getGreatestCommonDivider(b, a % b);
};

let count = 1;
while (count <= 3) {
    const num1 = getRandomNumber(0, 100);
    const num2 = getRandomNumber(0, 100);
    const rightAnswer = getGreatestCommonDivider(num1, num2);
    console.log('Question: ' + num1 + " " + num2);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(rightAnswer)) {
    console.log('Correct!'); count += 1;
    } else if (answer !== String(rightAnswer)) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${name}!`); count = count + 10;
    } else {
        console.log('this is wrong answer ;(.'); count = count + 10;
    };
};
if (count === 4) {
    console.log('Congratulations, ' + name + '!');
};