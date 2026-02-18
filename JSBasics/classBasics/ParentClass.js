class ParentClass{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name+ " - "+this.age);
    }
}
module.exports = {ParentClass};