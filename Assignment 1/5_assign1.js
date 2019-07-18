function Fibonacci(h) {
    var fibo = [];
    var a = 0;
    var b = 1;
    var temp;
    for (var i = 1; i <= h; i++) {
        if (a <= h && a != 0) {
            fibo.push(a);
        }
        temp = a;
        a = b;
        b = temp + a;
    }
    return fibo;
}
var fibores;
fibores = Fibonacci(21);
console.log(fibores);
