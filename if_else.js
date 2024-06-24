// ternary operator

let age = 10;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// ----------------------------------------------------------------------------
// if else

let number = 21
if (number % 2 === 0)
{
    console.log("The number is Even");
}

else
{
    console.log("The number is odd");
}

// ----------------------------------------------------------------------------
// else-if

let color = "silver";
if (color === "dark")
{
    mode = "black";
}
else if (color === "white")
{
    mode = "white";
}
else if (color === "brown")
{
    mode = "brown";
}
else 
{
    mode = "transparent";
}
console.log(mode);

// ----------------------------------------------------------------------------
// switch

let fruit = "papaya";
switch (fruit)
{
    case 'mango':
        console.log("Sweet");
        break;

    case 'banana':
        console.log("sweet and mushy");
        break;

    case 'papaya':
        console.log("Sour");
        break;

    default:
        console.log("Select a fruit");
}
