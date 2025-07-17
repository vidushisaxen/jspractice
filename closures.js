// closures are  functions bind together with their lexical scope

// function x(){
//     var a =20;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// x();

// var z= x();
// console.log(z);
// z();



// function x(){
//     var a =20;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z= x();
// console.log(z);
// z();


// var c = 1000;
// function z(){
//     var b=100;
//     function x(){
//         var a=10;
//         function y(){
//             var d=10000;
//          console.log(a,b,c,d);
//         }
//         y();
//     }
//     x();
// }
// z();


// uses of closures 
// 1. Module design patterns
// 2. Currying
// 3. functions like once
// 4. maintaining state sin async world
// 5. setTimeouts
// 6. Iterators