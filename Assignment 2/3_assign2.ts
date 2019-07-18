function Maximum(arr:number[]):number
{
    var temp:number = 0;
    var temp1:number = 0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>temp){
            temp = arr[i];
        }
        if(temp > temp1 && arr[i] > temp1){
            temp1 = arr[i];
        }
        if(temp == temp1){
            temp1 = 0;
        }
    }
    return temp1;
}
var res:number;
res = Maximum([23,89,6,29,56,45,77,32]);
console.log('Second Maximum number is '+res);
