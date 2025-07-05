var num = 1;
console.log(num);
one();
two();

console.log(num); //1

function one(){
    var num=10;
    console.log(num); //10
}


function two(){
    var num=100;
    console.log(num); //100
}

// 1 10 100
//10 100 1