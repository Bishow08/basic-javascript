console.log("hello day 7 practice");

//praciie array ===> map ,filter, sort, reduce,
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

// const allNames = characters.map((character)=> character.name);
// console.log({allNames});

// MAP

    // 1 Get an array of all names

    const allNames = characters.map( (name)=> { return name.name}); // if function start with culey braces it should have 'return' keyword
    console.log(allNames);

    // 2 Get an array of all heights

    const allHeights = characters.map((height)=> height.height);
    console.log(allHeights);

    // 3 Get an array of objects with just name and height properties

    const nameHeight = characters.map((nameH)=>({ //Since an arrow function without curly braces expects a single expression, if you want to return an object literal directly from that expression, you must wrap it in parentheses.  
        name:nameH.name,
        height:nameH.height
    }));
    console.log(nameHeight);


    // 4 Get an array of all first names

    const firstName = characters.map((firstName)=> {return firstName.name.split(" ")[0]});
    console.log(firstName);

    // FILTER

    // 1 Get characters with mass greater than 100
    const massGreater = characters.filter((mass)=>parseInt(mass.mass)>100);
    console.log(massGreater);

    // 2 Get characters with height less than 200
    const heightLess = characters.filter((heightless)=>  parseInt(heightless.height)<200)
    console.log(heightLess);

    // 3 Get all male characters
    const male = characters.filter((male)=>male.gender==='male');
    console.log(male);

    // 4 Get all female characters
    const female = characters.filter((female)=>female.gender==='female');
    console.log(female);
    //

    // SORT

    // 1 Sort by name


    // 2 Sort by mass


    // 3 Sort by height


    // 4 Sort by gender
 



