"use strict";
//--noEmitOnError
//tsc --noEmitOnError --target ES5 Customer.ts
//tsc --init
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // getFirstName():string{
    //     return this.firstName;
    // }
    // setFirstName(theFirst:string):void{
    //     this.firstName = theFirst;
    // }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirst) {
        this._firstName = theFirst;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Singh", "Ash");
// myCustomer.setFirstName("ASH");
// myCustomer.firstName = "Ash";
// myCustomer.lastName = "Singh";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
// console.log(myCustomer.lastName)
