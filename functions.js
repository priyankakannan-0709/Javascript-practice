function add(a,b){
    return a+b;
}

let sum = add(5,6);
console.log(sum);

const add1 = function (a,b){
    return a+b;
}
console.log(add1(5,6));

const add2 = (a,b) => a+b;
console.log(add2(5,6));