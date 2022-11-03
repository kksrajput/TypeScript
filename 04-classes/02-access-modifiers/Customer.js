//--noEmitOnError
//tsc --noEmitOnError --target ES5 Customer.ts
var Customer = /** @class */ (function () {
    function Customer(theLast) {
        // this.firstName = theFirst;
        this._lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Singh");
myCustomer.setFirstName("ASH");
// myCustomer.firstName = "Ash";
// myCustomer.lastName = "Singh";
console.log(myCustomer.getFirstName());
console.log(myCustomer.lastName);
// console.log(myCustomer.lastName)
