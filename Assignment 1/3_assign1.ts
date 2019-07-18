function DisplayFactors(a:number):number[]
{
    var factors = [];
    for(var i=1; i<=(a/2); i++)
    {
        if(a % i == 0)
        {
            factors.push(i);
        }
    }
    return factors;
}

var result:number[];

result = DisplayFactors(20);

console.log(result);