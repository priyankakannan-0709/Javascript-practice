/*
Create a Car class and:

initialize brand and price

add a method getCarInfo()
*/

export default class Car{
brand:String
price:number
    constructor(brand:String,price:number){
        this.brand=brand
        this.price=price
    }

    getCarInfo(){
        console.log(this.brand+" "+this.price)
    }

    getDiscountedPrice(percent:number){
        const discountedPrice :number = this.price - (this.price*(percent/100));
        this.price=discountedPrice;
        return discountedPrice;
    }

    static compareCarPrice(car1:Car, car2:Car){
        if(car1.price<car2.price){
            return car1.brand+ " is affordable"
        }
        else{
             return car2.brand+" is affordable"
        }
    }
}

