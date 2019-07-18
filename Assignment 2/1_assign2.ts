function Maximum(arr:number[]):number
{
    var temp:number = 0;
    for(var i=0; i< arr.length; i++)
    {
        if(arr[i] > temp)
        {
            temp = arr[i];
        }
    }
    return temp;
}

var maxlen:number;

maxlen = Maximum([23,89,6,29,56,45,77,32]);

console.log(maxlen);