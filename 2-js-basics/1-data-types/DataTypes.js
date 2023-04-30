// let testLet;
// testLet = 23;
let testLet = 23;

const PI = 3;
// PI = 4;
console.log(PI);

const OBJ = { a: 3 };
OBJ.a = 4; // not protected
console.log(OBJ); // { a: 4 }
// OBJ = { b: 5 }; // nor allowed
// console.log(OBJ);

let Hello = "Hello";
let World = "World";
`${Hello}, ${World}`; // Hello, World

let age = 1;
let Age = 2;
console.log(age == Age); // false
