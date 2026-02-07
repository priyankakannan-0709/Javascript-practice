class Person{
    
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age
    }
    
    get location(){
        return "California";
    }
    getDetails=function getDetails(){
        console.log(this.firstName+" "+this.lastName+" "+this.age+" "+this.location)
    }
}
let person = new Person("Ann","K",25);
person.getDetails()