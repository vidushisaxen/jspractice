// let and const declarations are hoisted ...
//they are in the Temporal Dead Zone(TDZ) - the phase from hoisting till it gets some values
//whenever we try to accessa a variable in TDZ it gives a reference error 
// when the variables are in TDZ , we cannot access them, they are accessible once the values has been initialized
// We can reduce TDZ by moving our initializations at the top of their scope


// console.log(a);
// console.log(b);
// console.log(c);
// var a =10;

// let b=100;

// const c =1000;
// console.log(b);
// console.log(c);

// var a = 30;

// console.log(a);


// let c; //declaration
//  c="abc" //initializing value

//  console.log(c);
 

// let b = 100;

// let b  = 200; //Syntax error 

// console.log(b);
  

// const c="abc";
// const c="pqr"
// console.log(c);


// const x =100; //type error
// x=10;
// console.log(x);

// const y = 10;




