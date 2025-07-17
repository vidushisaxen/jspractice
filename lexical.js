//scope in js is directly related to lexical environment

// function a(){
// let b=10;
//     // console.log(b);
// }
// a();
// console.log(b);


// function a(){
//     // console.log(b); //undefined
//     var b=20;
//     var c1=10;
//     var f=4;
//     c();
//     function c(){
//         console.log(ab); //20        
//     }
// }

// var b = 100;
// var ab = "abc"
// a();

// console.log(b); //100

// scope is the area in which the function or variable are accessible 
// lexical is physical presence , 
// lexical environment  = local memory + lexical environment of parent 
// lexical env. of GEC is null 
// scope chain .... form local memory to its parents memory to global space


let c1=98;
function a(){
    let a1=35;
    function b(){
        let b1=56;
        console.log(a1,b1,c1);
    }
    b();
}
a();