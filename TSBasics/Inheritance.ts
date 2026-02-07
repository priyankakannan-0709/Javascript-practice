import ElectricCar from './ElectricCar'
import Car from './Car'

const car:Car = new Car("Toyota",800000)
car.getCarInfo()
car.getDiscountedPrice(10)
car.getCarInfo()
const car2:Car = new Car("BMW",2800000)
car2.getCarInfo()
car2.getDiscountedPrice(50)
car2.getCarInfo()
console.log(Car.compareCarPrice(car,car2));
const electricCar = new ElectricCar("Tata",2342111,"255W")
electricCar.getCarInfo()