/*

let number = prompt("Enter a number ");

if (number % 5 === 0)
{
    console.log("The number", number, "is multiple of 5");

}

else
{
    console.log("The number", number, "is not multiple of 5");
}
//----------------------------------------------------------------------------------------------
*/

let number2 = prompt("Enter a number ");

if (number2 >= 80 && number2 <= 100)
{
    grade = "A";
}
else if (number2 >= 60 && number2 <=79)
{
    grade = "B";
}
else if (number2 >= 35 && number2 <= 59)
{
    grade = "C";
}

else
{
    grade = "F";    
}

console.log("The grade is", grade);