"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(2, 3);
let myCircle = new Circle_1.Circle(12, 13, 4);
let myRectangle = new Rectangle_1.Rectangle(0, 9, 4, 3);
let myShapes = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (let temp of myShapes) {
    console.log(temp.getInfo());
}
