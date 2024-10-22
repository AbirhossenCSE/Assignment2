const numbers = [45, 65, 42, 36];

const student = {
    name: 'sakib khan',
    age: 33,
    movie: ['king khan', 'dhakar mastan', 'futpater pola']
}
// 1. Template String
const about = `My name is ${student.name}. I am ${student.age} years old. Has number of ${numbers[2]}. Also liked movies ${student.movie[2]}.`;
console.log(about);

// 2. Arrow Function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
const output = doMath(12, 21);
console.log(output);


const newNumbers = [...numbers];
// Create a new array from an older array and add new element
const currentNumbers = [...numbers, 55];

numbers.push(99);
console.log(newNumbers);

// const newNumbers2 = [...numbers];
// console.log(newNumbers2);
console.log(currentNumbers);
