let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0;
}

const money = 70;
let food;
if (money > 100) {
    food = 'biriani';
} else {
   food = 'cha'; 
}
console.log(food);


let food1 = money>100 ? 'biriani' : 'cha-biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'muri';
console.log(drink);



const isActive = false;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();
