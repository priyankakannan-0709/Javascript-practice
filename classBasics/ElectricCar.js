const Car=require('./Car.js')

module.exports = class ElectricCar extends Car{

    constructor(brand,price,batteryCapacity){
        super(brand,price)
        this.batteryCapacity=batteryCapacity
    }

    getCarInfo(){
        console.log(this.brand+" "+this.price+" "+this.batteryCapacity)
    }
}