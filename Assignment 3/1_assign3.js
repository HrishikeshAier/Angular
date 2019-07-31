var Arithmetic = /** @class */ (function () {
    function Arithmetic(value1, value2) {
        this.number1 = value1;
        this.number2 = value2;
    }
    Arithmetic.prototype.Addition = function () {
        return (this.number1 + this.number2);
    };
    Arithmetic.prototype.Substraction = function () {
        return (this.number1 - this.number2);
    };
    Arithmetic.prototype.Multiplication = function () {
        return (this.number1 * this.number2);
    };
    Arithmetic.prototype.Division = function () {
        return (this.number1 / this.number2);
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(30, 15);
var obj2 = new Arithmetic(40, 20);
console.log("\nAddition is :" + obj1.Addition() + "\nSubstraction is :" + obj1.Substraction() + "\nMultiplication is :" + obj1.Multiplication() + "\nDivision is :" + obj1.Division());
console.log("\nAddition is :" + obj2.Addition() + "\nSubstraction is :" + obj2.Substraction() + "\nMultiplication is :" + obj2.Multiplication() + "\nDivision is :" + obj2.Division());
