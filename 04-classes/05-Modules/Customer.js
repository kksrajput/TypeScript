"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
//--noEmitOnError
//tsc --noEmitOnError --target ES5 Customer.ts
//tsc --init
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
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
exports.Customer = Customer;
