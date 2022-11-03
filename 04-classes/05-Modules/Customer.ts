//--noEmitOnError
//tsc --noEmitOnError --target ES5 Customer.ts
//tsc --init
export class Customer{
    
     
    constructor(private _firstName: string,private _lastName: string){
        
    }
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


