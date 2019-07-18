function Fibonacci(h:number):number[]
{
    var fibo = [];
    var a:number = 0;
    var b:number = 1;
    var temp:number;
    for(var i=1;i<=h;i++)
    {
        if(a<=h && a!=0)
        {
            fibo.push(a);
        }
        temp = a;
        a = b;
        b = temp + a;
    }
    return fibo;
}
var fibores:number[];
fibores = Fibonacci(21);
console.log(fibores);