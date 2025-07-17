 // let and const are block scoped - accessible inside their block only , var is global scoped
//  {
//     // this ia a block or compound statements - used to combine multiple js statements into one 
// var a =20;
//     console.log(a);
//     // wecan use this block as a whole where JS is expecting only one statement
//  }
//  console.log(a);
 

//  if(true) console.log("Hello")
// let a=30;
// const b=50;
//     if(true) {
//         var a1 =20;
//     console.log(a,b,a1);
//     }



//Shadowing

// var a1=100; // abc
// let b=100;
// const c = 100;
// console.log(a1);
// console.log(b);
// console.log(c);
// {
//         var a1= "abc"; //shadows a1 : bcz first it looks in local scope and also modified the value
//         let b  = "pqr";
//         const c = "xyz";
// console.log(a1); //abc
// console.log(b); //pqr
// console.log(c); //xyz
//     }
// console.log(a1); //abc
// console.log(b);
// console.log(c);

// we can shadow a let using a let  , var can be shadowed with let , const will shadow with const only 


// let b =100; //Illegal Shadowing
// {
//     var b =20;
// }


// var b =100;
// {
//     let b =20;
//     console.log(b);
    
// }
// console.log(b);

// var b =100;
// {
//     const b =20;
//     console.log(b);//20
// }
// console.log(b); //100




