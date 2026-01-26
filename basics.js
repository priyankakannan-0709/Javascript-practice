console.log("Hello World");


let arr = [231,121,1231,1231]
arr = new Array(12,1,1)
console.log(arr);

let sum = arr.reduce((sum,number)=>(sum+number),0)
console.log(sum);

let arr1 = [[23,12,2],[2,1]];
let arr2 = arr1.reduce((arr2, arr)=>arr2.concat(arr),[])
console.log(arr2);

const students = [
  { name: "Alice", subject: "Math" },
  { name: "Bob", subject: "Science" },
  { name: "Charlie", subject: "Math" },
];

const subjectMap = 

students.reduce((subjectMap,studentMap)=>{
 subjectMap[studentMap.subject] = subjectMap[studentMap.subject] || [];
 subjectMap[studentMap.subject].push(studentMap);
 return subjectMap;
},{});
console.log(subjectMap);