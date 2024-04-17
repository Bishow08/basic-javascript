console.log("day 7");


//revise


//for => for(start, condition, stepper){}
// do while do{//logic}while(condition)
// while

for(let i=0; i<=10;i++){
    console.log(i);
}

let j=0;
do {
    console.log(j);
    j++;
}while(j<=10);

let k=0;
while( k<=10) {
    console.log(k);
    k++;
}

//statements
//if(){}else{}
//switch case


const username ="raktim"
const password ="raktim" 
if(username === password){ // if use == it will return true or false but comparision only value  but === condidional compares both value and data types
    console.log(true);
} else {
    console.log("Invalid User");
}

//switch case

const day = 2;
switch(day){
    case 1:
        console.log("Sunday");
        break;

        case 2:
            console.log("Monday");
            break;

        case 3:
                console.log("Tuesday");
                break;

        default:
            console.log("invalid data");
}

// if else (es5)
// es6
//called as ternary Operator
username === password ? console.log("loggen in"): console.log("Invalid");

// Logical Operator

//And && ===> 
if(username==="raktim" && password==="raktim"){
    console.log("Logged In");
}

//Not ====> 
if(!username==="raktim"){
    console.log("Valid user");
}

//Or || ===>  
if(username==="raktim"|| password==="raktim"){
    console.log("valid user");

}

//function

// es6
//Write a js function to add 2 numbers
// result 2,2 ==>4
const sum = (num1,num2)=>{ //num1 and num2 called as parameters
return num1+num2;
}
//function call
const result =sum(2,2); // when  we call the function 2,2 are called as arguments
console.log({result});

//es5
function sums(num1,num2){
    return num1+num2;
}
const results = sum(2,2);
console.log({results});

//Bubble sort logic
//sort method with function comparison

const people =[
    {name: "raktim", age: 20},
    {nme: "sita", age:10},
    {name: "John", age :30}
    
];
//sort in Ascending order by age => smalll to big

// loop inside array
//compare 1st number age to 2nd number age
//swap the object if 1st is smaller than 2nd

const myLogic = (a,b) =>{
    return a.age-b.age; //
}
// sort logic >0 swap, <0 no swap  ,=0 no swap
const resultSort = people.sort(myLogic);
console.log({resultSort});

//praciice
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

const allNames = characters.map((character)=> character.name);
console.log({allNames});

