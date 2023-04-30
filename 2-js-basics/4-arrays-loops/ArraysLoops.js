let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

iceCreamFlavors[5] = "Cookie Dough";
iceCreamFlavors.push("ali");

for (let i = 0; i < iceCreamFlavors.length; i++) {
    const element = iceCreamFlavors[i];
    console.log(element);
}

console.log("-------------------------------");

let i = 0;
while (i < iceCreamFlavors.length) {
    console.log(iceCreamFlavors[i]);
    i++;
}