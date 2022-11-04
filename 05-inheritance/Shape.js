"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    // private _x:number;
    // private _y:number;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this.x;
    }
    set x(value) {
        this.x = value;
    }
    getInfo() {
        return `x = ${this._x}, y = ${this._y} `;
    }
}
exports.Shape = Shape;
