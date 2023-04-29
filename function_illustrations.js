console.log("functions");

// //Tax example 
// function tax(){
//     //....calculated
//     let x = 10;//Default tax
//     return (amount) => {
//         //....
//         // return amount*0.09+amount*0.08+amount*0.07+x;
//         return amount+x;
//     }
// }

// // let taxFunction  = tax();
// console.log(tax()(100));


let cube = number => number*number*number

console.log(cube(10,2));

//Imperative style of coding
//Declarative style of coding
//Functional style of coding


//Square of a number


//Nested functions
// addition of squares of two numbers
// function addSquares(num1, num2){
//     function square(number){
//         return number*number;
//     }
//     return square(num1) + square(num2);
// }

// console.log(addSquares(2,3));

//Error in calcuating the carpet area via paint... painting 2... for flooring 1.5... for plastering 3
// function calSquareConstantForPainting(){
//     //....
//     return 2;
// }

// function calSquareConstantForFlooring(){
//     //...
//     return 1.5;
// }

// function calSquareConstantForPlastering(){
//     //...
//     return 3;
// }

// //Higher order functions... when functions receive another functions as parameter or argument or return another function. Then these functions are called higher 
// //order functions.
function square(num,squareConstant){
    return num*num+squareConstant();    
}

let calSquareConstantForFlooring = ()=>{
    // ...
    return 2;
}
console.log(square(2,()=>0.1));
// console.log(square(2,calSquareConstantForPainting));
// console.log(square(2,calSquareConstantForPlastering));

// var x = 2;
// console.log(square(2));
// //Function as an expression 
// let cube = function(number){
//     return number*number*number;
// }

// // These are called anonymous functions
// //function(number){
// //     return number*number*number;
// // }


// let loanRate = function(number){
//     // .....
//     //a number is returned
//  return number *0.8;
// }

// loanRate  = function(number){
//     //....
//     return number*0.9;
// }

// console.log(cube(3));


//Temporal dead zone...time between hoisted and before initialised 
