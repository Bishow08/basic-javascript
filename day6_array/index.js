console.log("day 6");

// Array

// Collection of anything 
// Complex Data Types

// CRUD  Operations in array

// Create

const firstArr =[
    {name:"bishal", age:20, height:175},
    ["apple", "mango", "banana"],
    true,
    "Nepal", "Kathmandu", "America", "Canada",

];
const secondArr = new Array();

console.log({firstArr,secondArr});

const thirdArr = [
    "toyota", 
    {name:'hyndai'},
    "mercedes",
    [1,2,3],
    "tesla",
    function age(){}
];

console.log({thirdArr});
//In array it consists of index and value

// Read (Accessing the element using index i.e use [])

console.log(thirdArr[4]); //index 4 is the 5th  element because we start counting from zero
//acces object
console.log(thirdArr[1].name);
//for function use parenthesis
//console.log(thirdArr[6]());
console.log(thirdArr[3][1]); //accessing nested array of index 1 so output as 2

//Update

thirdArr[0] = "ford";
console.log({thirdArr});

//Delete
//use Spread Operator ...

const [c,d, ...rest]= thirdArr; //in array c and d are indexes
console.log(rest);

const obj = {a: "raktim", b: "ram", c:"shyam"};
//Delete
const {t,b, ...newobj}  = obj; //in object t and b known as key
console.log({newobj});

//use spread operator to concanate two arrays

const first = [1,2,3];
const second=[4,5,6];
const array= [...first , ...second ];

//Loop and print all the values of the result array

for(i=0; i<array.length; i++){

console.log(array[i]);
}
// console.log({array});
