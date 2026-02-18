const {ParentClass}=require('./ParentClass')

class ChildClass extends ParentClass{

    constructor(name,age,birthDate){
        super(name,age);
        this.birthDate=birthDate;
    }
}
module.exports={ChildClass}