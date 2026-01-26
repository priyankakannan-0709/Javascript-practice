const constVar = "Hello"
let letVar = "Let Hello"
var varVar = "Var Hello"

// if(true){
//     console.log(constVar);
//     console.log(letVar);
//     console.log(varVar);
// }

if(true){
    let letVar = "block let Hello";
    console.log(letVar);
    const constVar = "block const Hello";
    console.log(constVar);
    var varVar = "block Var Hello";
    console.log(varVar);
}

console.log(constVar);
console.log(letVar);
console.log(varVar);

print = () => {
    const constVar = "Function const Hello";
    const letVar = "Function let Hello";
    const varVar = "Function var Hello";
    console.log("===================");
    console.log(constVar);
    console.log(letVar);
    console.log(varVar);
}
console.log("===================");
console.log(constVar);
console.log(letVar);
console.log(varVar);
print()