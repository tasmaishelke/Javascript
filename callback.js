function add(val1, val2, addFunc) {
    let sum = val1 + val2;
    addFunc(sum);
    console.log("End addition");
}

function afteraddition (sum) {
    console.log("The sum is", sum);
}


add(30, 40, afteraddition);
