
function promiseCallback(resolve, reject) {
    console.log("1")
    setTimeout(setTimeoutCallback, 3000, resolve, "viraj");
    console.log("2")
}

function setTimeoutCallback (resolve, name) 
{
        console.log("hello", name);
        resolve();
}

/**
  
async function function1() {
    console.log("start")
    await new Promise((resolve, reject)=>{
        // do something
        resolve();
    })
    console.log("end")
}
  
 */

async function function1() {
    console.log("start")
    await new Promise(promiseCallback)
    console.log("end")
}

function1()
let p = new Promise(promiseCallback)
 p.then(()=>{
  // after promise is executed
 })

