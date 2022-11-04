export abstract class Shape{
    // private _x:number;

    // private _y:number;

    constructor(private _x:number,private _y:number){

    }

    get x():number{
        return this.x;
    }
    set x(value: number) {
        this.x = value;
    }
    getInfo():string{
        return `x = ${this._x}, y = ${this._y} `;
    }
    abstract calculateArea():number;

    
    
}