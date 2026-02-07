"use strict";
/*
Create a Car class and:

initialize brand and price

add a method getCarInfo()
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    Car.prototype.getCarInfo = function () {
        console.log(this.brand + " " + this.price);
    };
    Car.prototype.getDiscountedPrice = function (percent) {
        var discountedPrice = this.price - (this.price * (percent / 100));
        this.price = discountedPrice;
        return discountedPrice;
    };
    Car.compareCarPrice = function (car1, car2) {
        if (car1.price < car2.price) {
            return car1.brand + " is affordable";
        }
        else {
            return car2.brand + " is affordable";
        }
    };
    return Car;
}());
exports.default = Car;
