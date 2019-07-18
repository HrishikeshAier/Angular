var ChkArmstrong = (a:number) =>{
    var x:number = a;
    var p:number = 0;
    var q:number =0;
    while(x > 0)
    {
        p = x % 10;
        q = q + (p*p*p);
        x = Math.floor(x/10);
    }
    if(a == q)
    {
        console.log('It is Armstrong number');
    }
    else{
        console.log('It is not an Armstrong number');
    }
}

ChkArmstrong(153);