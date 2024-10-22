// // 1. JSON
// // Stringify, Parse
// const student = {
//     name: 'sakib khan',
//     age: 33,
//     movie: ['dhakar mastan', 'futpater pola']
// }
// const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

// const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);


// // 2. Fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))

// // Keys, Values
// const keys = Object.keys(student);
// const values = Object.values(student);

// // for
// const numbers = [46, 56, 46, 56];
// numbers.forEach(num => console.log(num));
// numbers.map(num => num * 2);

// for off on array loke object

const products = [
    {neme: 'laptop', price: 3200, brand: 'Asus'},
    {neme: 'laptop', price: 3200, brand: 'Asus'},
    {neme: 'laptop', price: 3200, brand: 'Asus'},
    {neme: 'phone', price: 3200, brand: 'Asus'},
    {neme: 'laptop', price: 3200, brand: 'Asus'}
];
const newProduct = {neme: 'laptop', price: 4000, brand: 'MAC'}
// Add profuct
const newProducts = [...products, newProduct];
console.log(newProducts);
// remove product
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);


