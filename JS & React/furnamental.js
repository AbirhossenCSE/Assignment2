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