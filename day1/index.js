//clone , add, commit and push

// git add .
// git commit -m "adding new question"
// git push origin main

// keywords
// var= used for global variable define
// let = reused variables
// const = used for constant value

var name1 = "bishal";
var name1 ="hey"
console.log(name1);  // it will print honey because of the scope of let keyword

const person ="John"
const person1 ="Jane"

console.log({person});
console.log({person1});

// Interactions
// 1. Browser as user interface
// 2. Keywords
//    a. Alert = alert the users by sending any kind of message
//    b. Prompt = ask users to input value
//    c. Confirm = Yes/No for user

alert("Hello World!");

const question1= prompt("What is your name?");

const question2= confirm("Are you 18 years or above?");

console.log({question1, question2});

// Update the above question1 and question2 to print name and age
// through alert

alert("Your name is " + question1 +  " and age 18 and above is " +question2);

// Also we can use templete literals as ${question1} and ${question2}
