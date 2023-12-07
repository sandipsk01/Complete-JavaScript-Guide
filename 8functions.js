// Function Declaration: Hoistion Works
function sum1(a,b){
    return a+b;
}
console.log(sum1(5,6));

// Function Expression: Does not support hoisting
// 1.Named
const sum2 = function sum(a,b){
    return a+b;
}
console.log(sum2(2,4));

// 2.Anonymous
const sum3 = function (a,b){
    return a+b;
}
console.log(sum3(4,5));
