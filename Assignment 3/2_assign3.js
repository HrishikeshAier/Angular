var Circle = /** @class */ (function () {
    function Circle(value1) {
        this.Radius = value1;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return (this.Radius * this.Radius * this.PI);
    };
    return Circle;
}());
var obj1 = new Circle(5);
var obj2 = new Circle(12);
console.log("Area of circle with Radius 5 is :" + obj1.Area());
console.log("Area of circle with Radius 12 is :" + obj2.Area());
