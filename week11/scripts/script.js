function greet(name, time = "day") {              // function
    console.log(`Good ${time}, ${name}!`);
}

// let greet = function(name) {        // function expression
//     console.log(`Hello ${name}!`);
// }

// let greet = (name) => {             //arrow function
//     console.log(`Hello ${name}!`);
// }

// greet("Chris", "Night");




let user_input = prompt("Enter a radius of the circle: ");

function circleArea(input) 
{
    if(isNaN(input)) {
        alert("This is not a number");
    }
    
    else {
        let radius = Math.PI * input**2; 
        return radius;
    }
}

if (user_input !== undefined) {
    let raidus_result = circleArea(user_input).toFixed(2);
    alert(`The area of a circle with radius ${user_input} is ${raidus_result}`);
}
