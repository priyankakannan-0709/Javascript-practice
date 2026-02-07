/*
Create a Car class and:

initialize brand and price

add a method getCarInfo()
*/

module.exports = class Car{

    constructor(brand,price){
        this.brand=brand
        this.price=price
    }

    getCarInfo(){
        console.log(this.brand+" "+this.price)
    }

    getDiscountedPrice(percent){
        const discountedPrice = this.price - (this.price*(percent/100));
        this.price=discountedPrice;
        return discountedPrice;
    }

    static compareCarPrice(car1, car2){
        if(car1.price<car2.price){
            return car1.brand+ " is affordable"
        }
        else{
             return car2.brand+" is affordable"
        }
    }
}

