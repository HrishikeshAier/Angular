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
class CircleX extends Circle
{
    Circumference():number
    {
        return (2*this.PI*this.Radius);
    }
}

var obj1 = new CircleX(5);
var obj2 = new CircleX(12);
console.log("\nRadius 5 having Area is :"+obj1.Area()+"\nRadius 5 having Curcumference is :"+obj1.Circumference());
console.log("\nRadius 12 having Area is :"+obj2.Area()+"\nRadius 12 having Curcumference is :"+obj2.Circumference());