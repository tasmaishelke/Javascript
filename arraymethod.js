let list = [1,2,3,4,5,6,7,8,9,10,11,12];

let evenArray = list.filter((num) =>
{
    if (num %2 === 0)
    {
        return num;
    }
});

console.log(evenArray);
/* above program uses a variable evenArray as a
 fucntion through arrow fucntion technique and we 
 use various array methods like filter, reduce, map, 
 forEach
*/


let number = [23,43,54,64,78,97,10,90,54];
// by arrow function method
const biggerNumber = number.reduce((previous, next) =>
{
    return previous > next ? previous : next;
});
console.log(biggerNumber);

// by normal function method
const biggerNumber2 = number.reduce(function biggerNumber2(previous, next)
{
    return previous > next ? previous : next;
});
console.log(biggerNumber2);

//q. from an array filter out marks which are greater than 90

let marks = [67,435,76,87,45,878,90,23];

let markGreater = marks.filter(function markGreater2(value) // normal function
{
    return value >= 90;
});

let markGreater2 = marks.filter((value) =>      // arrow function
{
    return value >= 90;
});

function markgreater3(value)
{
    return value >= 90;
}

let markGreater3v = marks.filter(markgreater3);


console.log(markGreater);
console.log(markGreater2);
console.log(markGreater3v);


//q.

//let size = prompt("Enter the size");
size = 10;
students = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0; i<size; i++)
// {
//     students[i] = parseInt(prompt("Enter the number"));

// }
console.log(students);

let sum = students.reduce((first, current) =>
{
    return first + current;
});
let mul = students.reduce((first, current) =>
{
    return first * current;
});
console.log(sum);
console.log(mul);

