function greet(name) {              // function
    console.log(`Hello ${name}!`);
}

let greet = function(name) {        // function expression
    console.log(`Hello ${name}!`);
}

let greet = (name) => {             //arrow function
    console.log(`Hello ${name}!`);
}

greet("Chris");

