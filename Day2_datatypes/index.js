// Data types are primitive and non-primitive data types
// Primitive data types: number, string, boolean, null, undefined, Bigint

// String let color = "yellow";
// Number let weight = 7.9;
// Boolean let isInStock = true;
// Bigint  let hugeString = BigInt("900098584848");
// Undefined  let x;
// Null   let foo = null;  foo has no type and value
// Symbol   let sym1 = Symbol('symbol'); used to create unique ID
// complesx or Non primitive data types is object
// Object const person = {firstName:"Bishal", lastName:"BK"}

// Lets explore in details

//1 String

const person = "ram"; //double and single quote can be used and also tilde/backtick
let female = "sita";
const user = 'Bishal'; //single quote
const user2 = `Ghamal`; //backtick
console.log({person,female, user, user2});

//2 Number

const pi = 3.14;
const num2 = 2;
const num3 = 3.2;

console.log({pi, num2, num3});

//3 Boolean

const isRamBoy = true; //Camel Case
const isSitaGirl = true;

console.log({isRamBoy, isSitaGirl});

//4 Undefined  (only used in let and var)

let test;
var test2;
console.log({test, test2});

//5 null  used: The null keyword in JavaScript is a falsy data type that denotes that the data type is null. Falsy type refers to the coercion of null to false during conditional statement executions.

const data = null;
console.log({data});

// type Conversion & Type Coercion

// Multiply using interaction (promt)

const mul1 = prompt("Enter 1st Num"); //we get string
const mul2 = prompt("Enter 2nd Num"); //string
const stringOnly = String(mul1); //why not-defined?
//type conversion
const result = Number(mul1) * Number(mul2); //type conversion into number

console.log({result, stringOnly});
