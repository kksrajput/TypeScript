//--noEmitOnError
//tsc --noEmitOnError --target ES5 Customer.ts
class Customer{
    private firstName: string;
    private _lastName: string;
    constructor(theLast: string){
        // this.firstName = theFirst;
        this._lastName = theLast;
    }
    getFirstName():string{
        return this.firstName;
    }
    setFirstName(theFirst:string):void{
        this.firstName = theFirst;
    }
    get lastName():string{
        return this._lastName;
    }
    set lastName(value:string){
        this._lastName = value;
    }

}

let myCustomer = new Customer("Singh");
myCustomer.setFirstName("ASH");

// myCustomer.firstName = "Ash";
// myCustomer.lastName = "Singh";
console.log(myCustomer.getFirstName());
console.log(myCustomer.lastName);
// console.log(myCustomer.lastName)