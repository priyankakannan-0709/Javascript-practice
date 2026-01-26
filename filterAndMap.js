//Given an array of numbers, return a new array where each number is doubled.
arr=[1,2,3]

newArr = arr.map(number =>number*2)
console.log(newArr);


newArr = arr.map(number=>number.toString())
console.log(newArr);

/*
["Alice", "Bob", "Charlie"]
// → ["A", "B", "C"]
*/
strArr = ["Alice", "Bob", "Charlie"];
firstLetterArr = strArr.map(str => str[0]);
console.log(firstLetterArr);

//Return even numbers
numArr = [1, 2, 3, 4, 5, 6];
console.log(numArr.filter(num => num%2==0));

//Return squares of only even numbers
console.log(numArr.filter(num => num%2===0).map(num=>num*num));

//Strings - convert first letter to caps
names = ["john", "jane", "mike"];
console.log(names.map(
    nameString => nameString[0].toUpperCase()+nameString.slice(1)
))

//Returns active users
const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

console.log(users.filter(user => user.active==true).map(user=>user.name));

//10% tax
const price=[100, 200, 300];
console.log(price.map(item=>item+(item*0.1)));

//Return products between price range
const products = [
  { name: "Phone", price: 1200 },
  { name: "Headphones", price: 800 },
  { name: "Mouse", price: 400 },
  { name: "Keyboard", price: 600 }
];

console.log(products.filter(product => (product.price>=500 && product.price<=1000)));

//students whose marks greater than 40
const students = [
  { name: "Alice", marks: 78 },
  { name: "Bob", marks: 35 },
  { name: "Charlie", marks: 42 },
  { name: "David", marks: 28 }
];
console.log(students.filter(student=>student.marks>40).map(student=>student.name));

//Remove Falsy values
const allArr = [0, 1, false, 2, "", 3, null, undefined];
console.log(allArr.filter(num => (num!=0)&&num!=""&&num!=null&&num!=undefined&&num!=false));

/*Convert array of strings to lengths

["JS", "Playwright", "Automation"]
// → [2, 10, 10]*/
const courses=["JS", "Playwright", "Automation"]
console.log(courses.map(course=>course.length));

//convert USD to INR and return only which is greater than 1000
const paise=[5, 10, 15, 20];
console.log(paise.map(rupee=>rupee*83).filter(rupee=>rupee>1000));