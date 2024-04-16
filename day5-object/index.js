console.log("day 5");

// complex data types (object, Array , Date)

// Object
// we can perform CRUD on complex data types
// Object Keyword is {}
// Always start with const

const car = {
    name: "Tesla",
    model: "Model S",
    year: 2019,
    color: "white",
    milage: 45,
    battery: "720 HP",
    owner:{
        a:"raktim",
        b:"bishal"
    },
    age: function(){
        return 2024 - 2019;
    }, //this is called ES5 anonymous function
    old: () =>{
        return 2024 - 2019;
    } // this is called arrow function which is introduced in ES6

    }
//Create
// const box = new Object() technique 1
//technique 2 const box ={}


// Read (use .notation)
console.log(car.name, car.model, car.old()); // for access function just call function i.e with parenthesis

//Update
car.color="black";
car.owner.a= "Elon Musk";

// Add non existing property
car.owner.c="Jeff Bezos";
console.log(car);

//Delete
//either delete the object
// or delete the property

// use delete keyword

delete car.milage; //delete the property milage
console.log(car);
delete car; //delete the whole object
console.log(car);

//another object
const teacher = {
    name:"raktim",
    dob: 2012,
    age: function(){
        return 2024-this.dob;
    },
    old: () => { 
    //return 2024 -this.dob; so make change this to 'teacher'
    return 2024 - teacher.dob;
}
}
console.log(teacher.age()); //12 this keyword refers to the object
console.log(teacher.old()); //NaN why? because of local scope  of this in arrow functions

// Write a program which can return a boolean if value is present in the range with given start and end values in an object

//Example
const range = {
    start:10,
    end:50,
    check: (num)=> {
        if(num >= range.start && num <= range.end)
        {
        return true;}
return false;
};



console.log(range.check(30));