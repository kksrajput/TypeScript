//--noEmitOnError
//tsc --noEmitOnError --target ES5 Customer.ts
//tsc --init
class Customer{
    private _firstName: string;
    private _lastName: string;
    constructor(theFirst: string,theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    // getFirstName():string{
    //     return this.firstName;
    // }
    // setFirstName(theFirst:string):void{
    //     this.firstName = theFirst;
    // }
    get firstName():string{
        return this._firstName;
    }
    set firstName(theFirst: string){
        this._firstName = theFirst;
    }
    get lastName():string{
        return this._lastName;
    }
    set lastName(value:string){
        this._lastName = value;
    }

}

let myCustomer = new Customer("Ash","Singh");
// myCustomer.setFirstName("ASH");

// myCustomer.firstName = "Ash";
// myCustomer.lastName = "Singh";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
// console.log(myCustomer.lastName)