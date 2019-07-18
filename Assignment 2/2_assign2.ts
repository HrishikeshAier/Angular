function Summation(arr:number[]):number
{
    var total:number = 0;
    for(var i=0; i<arr.length; i++)
    {
        total = total + arr[i];
    }
    return total;
}

var sum:number;

sum = Summation([23,6,7,4,5,7]);

console.log('Addition is '+sum);