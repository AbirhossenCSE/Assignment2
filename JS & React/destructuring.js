// 1. array destructuring
const number = [42, 65];
const [x, y] = [42, 65];
console.log(x, y);


const nums = [25, 65];
const [a, b] = nums;
console.log(a, b);


const student = {
    name: 'sakib khan',
    age: 33,
    movie: ['dhakar mastan', 'futpater pola']
}
// const [firstMovie, secondMovie] = ['dhakar mastan', 'futpater pola']
const [firstMovie, secondMovie] = student.movie;
console.log(firstMovie, secondMovie);


// object Destructuring
const { name, age } = {name: 'alu', age: 12}
const { name2, age2 } = {id: 1, name2: 'alu', age2: 12 }


const employee = {
    ide: 'vs code',
    degignation: 'developer',
    machine: 'windows',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        widht: 44,
        address: 'daulotpur',
        dirnk: 'water'
    }
}

const {machine, ide} = employee;
console.log(machine, ide);

const {height, address} = employee.specification;
console.log(height, address);
