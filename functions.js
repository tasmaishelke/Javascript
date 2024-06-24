// with function keyword
function msg()
{
    console.log("hello 1");
}
// with arrow operator and anynomous method assigned to varaible msg2
const msg2 = () =>
{
    console.log("hello2");
}
// with function keyword and anynomous method assigned to varaible msg3
let msg3 = function () 
{
    console.log("hello3");
}
// here settimeout is called with variable name (method name)
setTimeout(msg, 2000);
setTimeout(msg2, 2000);
setTimeout(msg3, 2000);


//same as msg2
setTimeout(() =>
{
    console.log("hello 4");
}, 2000);

//same as msg3
setTimeout(function () {
    console.log("hello5");
}, 2000);




