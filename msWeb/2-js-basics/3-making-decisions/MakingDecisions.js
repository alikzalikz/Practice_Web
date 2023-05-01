// "1" == 1   ->  true
// "1" === 1  ->  false


let currentMoney = 439;
let laptopPrice = 439;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20)

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
    console.log("buy a new laptops");
} else {
    console.log("you can not buy a new laptop")
}


let a = 20;
let b = 30;
let biggestNum = a > b ? a : b; // ternary operator
console.log(biggestNum);
