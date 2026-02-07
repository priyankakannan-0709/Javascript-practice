
export {};
let num1 : number = 5
let num2 : number = 10
let sum : number = num1 + num2
console.log(sum) 

let personObject : {name:String,age:number,company:String} = {
    name: "Priyanka",
    age:25,
    company: "TW"
}

console.log(personObject.company);

function addition(a:number,b:number) :number {
    return a+b;
}

console.log("Add "+addition(4,5));
