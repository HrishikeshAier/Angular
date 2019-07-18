function maximum(a:number,b:number,c:number):number
{
    if(a>b){
        if(a>c){
            return(a);
        }
        else{
            return(c);
        }
    }
    else{
        if(b>c){
            return(b);
        }
        else{
            return(c);
        }
    }
}
var maxval:number = maximum(23,89,6);
console.log(maxval);