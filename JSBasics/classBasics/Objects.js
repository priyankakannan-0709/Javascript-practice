const person = {
    firstName : "Priyanka",
    lastName : "Kannan",
    fullName : function() {return this.firstName+" "+this.lastName}
}

console.log(person.firstName);
console.log(person['lastName'])
console.log(person.fullName())

person.gender = 'Female'
delete person.fullName
//console.log(person.fullName())

console.log(person)
