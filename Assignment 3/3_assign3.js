var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        return (2 * this.PI * this.Radius);
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(5);
var obj2 = new CircleX(12);
console.log("\nRadius 5 having Area is :" + obj1.Area() + "\nRadius 5 having Curcumference is :" + obj1.Circumference());
console.log("\nRadius 12 having Area is :" + obj2.Area() + "\nRadius 12 having Curcumference is :" + obj2.Circumference());
