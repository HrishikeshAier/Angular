function ChkPrime(n:number):boolean
{
    if(n == 1){
        return false;
    }
    if(n == 2){
        return true;
    }
    for(var i=2; i<n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
var res:boolean;
res = ChkPrime(11);
if(res == true){
    console.log('It is Prime Number');
}
else{
    console.log('It is not a Prime Number');
}