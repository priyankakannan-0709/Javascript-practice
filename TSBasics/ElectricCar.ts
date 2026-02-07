import Car from './Car'

export default class ElectricCar extends Car{
    batteryCapacity : String

    constructor(brand:String,price:number,batteryCapacity:String){
        super(brand,price)
        this.batteryCapacity=batteryCapacity
    }

    getCarInfo(){
        console.log(this.brand+" "+this.price+" "+this.batteryCapacity)
    }
}