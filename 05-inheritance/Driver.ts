import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
let myShape = new Shape(2,3);

console.log(myShape.getInfo());

let myCircle = new Circle(12,13,4);


console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0,9,4,3);


console.log(myRectangle.getInfo());