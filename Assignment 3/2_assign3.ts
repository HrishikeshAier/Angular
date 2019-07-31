class Circle
{
    Radius:number;
    PI:number;
    constructor(value1:number)
    {
        this.Radius = value1;
        this.PI = 3.14;
    }
    Area():number
    {
        return (this.Radius*this.Radius*this.PI);
    }
}
var obj1 = new Circle(5);
var obj2 = new Circle(12);
console.log("Area of circle with Radius 5 is :"+obj1.Area());
console.log("Area of circle with Radius 12 is :"+obj2.Area());