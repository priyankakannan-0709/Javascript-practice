arr = [12,45,21,23];

// Find the largest number in an array
const largest = arr.reduce((largest,number)=>(number>largest)?number:largest,-Infinity)
console.log(largest)

//Count no of elements in an array without length
var count = arr.reduce(count=>count+1,0)
console.log(count)

//Flatten 2D array to single D array
const TwodArray = [[1, 2], [3, 4], [5]]
const singleArr = TwodArray.reduce((singleArr,arr)=>singleArr.concat(arr),[]);
console.log(singleArr);

//Count occurrences of an array, o/p: {apple:2,banana:3..}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const map = fruits.reduce((map,fruit)=>{
    map[fruit] = map[fruit]+1 || 1;
    return map; 
},{})
console.log(map);

//Sum of object properties, op: 160


const stationery =[
  { name: 'Pen', price: 10 },
  { name: 'Book', price: 50 },
  { name: 'Bag', price: 100 }
];

const price = stationery.reduce((totalPrice,perItem)=>totalPrice+perItem.price,0)
console.log(price);

//Group by property,
/* op:
{
  admin: [
    { name: 'A', role: 'admin' },
    { name: 'C', role: 'admin' }
  ],
  user: [
    { name: 'B', role: 'user' }
  ]
}
*/
const students = [ { name: 'A', role: 'admin' },
  { name: 'B', role: 'user' },
  { name: 'C', role: 'admin' }]

const groupByRole = students.reduce((roleMap,student)=>{
    roleMap[student.role] = roleMap[student.role] || [];
    roleMap[student.role].push(student);
    return roleMap;
},{})

console.log(groupByRole);

// Remove duplicate elements in an array
elementsArray = [12,23,12,14,14,2];

const uniqueArray1 = elementsArray.reduce((uniqueArray,number)=>
{
    if(!uniqueArray.includes(number))
        uniqueArray.push(number);
    return uniqueArray;
}
,[]);
console.log(uniqueArray1)

//Keep even numbers in an array and double them

const numbers = [1,2,3,4,5,6]
const evenArr = numbers.reduce((evenArr,number)=>{
    if(number%2==0)
        evenArr.push(number*2)
    return evenArr;
},[])
console.log(evenArr);

//convert an array into an object
/*
[
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mobile' }
], op:
{
  1: { id: 1, name: 'Laptop' },
  2: { id: 2, name: 'Mobile' }
}
*/

const arrOfObj = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mobile' }
];

const mapObj = arrOfObj.reduce((mapObj,obj)=>{
    //mapObj[obj.id] = mapObj[obj.id] || {};
    mapObj[obj.id]=obj;
    return mapObj;
},{});

console.log(mapObj)

// Flatten a deeply nested array using reduce.
/*
[1, [2, [3, [4, 5]]]] = [1,2,3,4,5]
*/

const nestedarr = [1, [2, [3, [4, 5]]]];

var flatenArr = arr12=> arr12.reduce((acc,number1)=>{
    if(typeof number1==="number")
        acc.push(number1);
    else
        acc.push(...flatenArr(number1));
    return acc;
},[]);
console.log(flatenArr(nestedarr));

//Average of numbers in an array

const numArr = [1,2,3,5]
const { sum, countofArray } = numArr.reduce((acc, number) => {
    acc.sum += number;
    acc.countofArray += 1;
    return acc;
}, { sum: 0, countofArray: 0 });
const avg = sum / countofArray;
console.log(avg);

/*
[
  { item: 'Shirt', price: 500, qty: 2 },
  { item: 'Jeans', price: 1000, qty: 1 }
]
*/
// Total cost of items in a cart

const cart = [
  { item: 'Shirt', price: 500, qty: 2 },
  { item: 'Jeans', price: 1000, qty: 1 }
];

const cost = cart.reduce((cost,item)=>{
  cost = cost + (item.price*item.qty);
  return cost;
},0)

console.log(cost);

//compose functions
const input = 5;

const output = (input*3)+2;
console.log(output);


/*
[
  ['name', 'Priyanka'],
  ['age', 25],
  ['role', 'QA']
]
*/
const arrOfarr = [
  ['name', 'Priyanka'],
  ['age', 25],
  ['role', 'QA']
];

const queryString = arrOfarr.reduce((queryString,arr)=>{
  queryString = queryString.concat(arr[0]).concat("=").concat(arr[1]).concat("&")
  return queryString;
},"");
console.log(queryString.slice(0,-1));