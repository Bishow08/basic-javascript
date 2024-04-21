
function roleChecked(userRole,SysRole){
    for(let i=0; i< userRole.length ;i++){
        if (userRole[i] === SysRole) {
            return true;
}
return false;
    }
}

console.log(roleChecked(["admin","user"],"admin"));

// Real world pagination

const data = [1,2,3,4,5,6,7,8,9,10];
const page =2;
const limit = 2;

// function getPageData(data ,page ,limit){
//     const startIndex = (page -1)* limit;
//     return data.slice(startIndex , startIndex + limit);
//     }
    
// console.log("Page Data : ",getPageData(data,page,limit));


    // Search
    const users=[{name:"raktim"},{name:"ram"},{name:"riya"}];
// User type ra => [{name: "raktim"}, {name:"ram"}]

console.log(users.filter((names)=> names.name.includes('ra')));


// Immutable JS
// Data is getting from somewhere and CRUD  operation on that original data should be avoided.
//  So we are using immutable js to create a new copy of the object with out changing the actual one.
// use MAP, REDUCE , SOME, EVERY ,FILTER, FIND these makes a copy of original data

//i am sure that it doesnot have impact on original data, and modify data is done through 'forEach', 'delete', 'replace'.

const date = new Date();
console.log(data);

//CRUD

// Read
console.log(date.getDay(5))
