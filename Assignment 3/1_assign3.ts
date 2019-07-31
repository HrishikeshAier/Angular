class Arithmetic
{
    number1:number;
    number2:number;
    constructor(value1:number,value2:number)
    {
        this.number1 = value1;
        this.number2 = value2;
    }
    Addition():number
    {
        return (this.number1 + this.number2);
    }
    Substraction():number
    {
        return (this.number1 - this.number2);
    }
    Multiplication():number
    {
        return (this.number1 * this.number2);
    }
    Division():number
    {
        return (this.number1 / this.number2);
    }
}
var obj1 = new Arithmetic(30,15);
var obj2 = new Arithmetic(40,20);
console.log("\nAddition is :"+obj1.Addition()+"\nSubstraction is :"+obj1.Substraction()+"\nMultiplication is :"+obj1.Multiplication()+"\nDivision is :"+obj1.Division());
console.log("\nAddition is :"+obj2.Addition()+"\nSubstraction is :"+obj2.Substraction()+"\nMultiplication is :"+obj2.Multiplication()+"\nDivision is :"+obj2.Division());
