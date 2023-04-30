function sayHello() {
    console.log("hello");
}
sayHello();


function sayHelloTo(name="everyone") {
    const message = `hello to ${name}`;
    console.log(message);
}
sayHelloTo("ali");
sayHelloTo();


function craeteHelloMessage(name) {
    const message = `hello, ${name}`;
    return message;
}
let helloMessage = craeteHelloMessage("ali");
console.log(helloMessage);


function displayDone() {
    console.log("3 second elapsed");
}
setTimeout(displayDone, 3000); // use function as parameter

// setTimeout(function() {  // Anonymous functions
//     console.log("3 second elapsed");
// }, 3000);

// setTimeout(() => {  // Fat arrow functions
//     console.log("3 second elapsed");
// }, 3000);
