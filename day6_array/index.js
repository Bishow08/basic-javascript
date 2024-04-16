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

for(i=0; i<array.length; i++){ //here length is method and accessed by . operator

console.log(array[i]);
}
// console.log({array});

//google mozill js array

// Write a js array solution to add new element in the array
const newArr = [1,2];
//now use array method to add [0,1,2]
console.log(newArr.unshift(0)) ; //output will be 3
console.log({newArr});

//Write a js array method solution to convert Array to string

const testString="1,2";
console.log(testString.split(",")); //this will split the string into an array using comma as separator

//sort in Ascending order by age => small to big
const people =  [{name:'raktim',age:30},
                {name:"sita", age:20},
                {name: 'Ram', age :15}
            ];






