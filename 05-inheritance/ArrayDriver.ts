import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
let myShape = new Shape(2,3);

let myCircle = new Circle(12,13,4);

let myRectangle = new Rectangle(0,9,4,3);

let myShapes: Shape[] = [];

myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);

for(let temp of myShapes){
    console.log(temp.getInfo());
}