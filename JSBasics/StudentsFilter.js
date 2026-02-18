const students = [
    {
        name:'Priyanka',
        score:100
    },
    {   
        name:'Prema',
        score:99
    },
    {
        name:'Kannan',
        score:99
    }
]

console.log(students.filter(student => (student.score>36)).map(student=>student.name));

console.log(students.filter(student => (student.score>36)).map(student=>(student.name).toUpperCase()))

const sum = students.reduce((sum,student)=>{
    if(student.score>36)
        sum=sum+student.score
    return sum;
},0)

console.log(sum);