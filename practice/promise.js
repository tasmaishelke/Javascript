function api1(resolve, reject) {
    setTimeout(() => {
        console.log("Hello api 1 is done");
        reject("success");

    }, 2000);
}



new Promise(api1).then((res) => {
    console.log("T&C api 1.1 is triggered", res)

}).catch((error) => {
    console.log("Error T&C api 1.1 is triggered", error)
})

/// async await method
async function main() {
    try {
        const res = await new Promise(api1)

        console.log("api 1.1 is triggered", res)
    } catch (error) {
        console.log("Error api 1.1 is triggered", error)
    }
}
main();
