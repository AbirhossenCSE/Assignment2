// 1. How to declare a veriable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. 6 basic condition: >, <, ===, !==, <=, >=
// Multiple consition: &&, ||
if (fatherName === 'arnold' || season === 'rainy') {
    console.log('Not Welcome');
}
else if (fatherName === 'Arnold' || season === 'winter') {
    console.log('Welcome');
    
}
else {
    console.log('Go back');
}

// 3. Array declare
// index of array
// langth, push
const numbers = [45, 65, 42, 36];
numbers[0] = 21;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number); 
}

// 5. Function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(10, 12);
console.log(output);

// 6. Object
// 3 ways to access proparty by name
const student = {
    name: 'sakib khan',
    age: 33,
    movie: ['king khan', 'dhakar mastan', 'futpater pola']
}

const myVeriable = 'age';
console.log(student.age); //direct by proparty
console.log(student['age']); //access via proparty name string
console.log(student[myVeriable]); // access via proparty name in a veriable


 