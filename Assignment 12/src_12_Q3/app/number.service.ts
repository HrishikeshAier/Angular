import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(var1:number)
  {
    var cnt = 0;
    if(var1 === 1){ return ('Not Prime Number');  }
    else if(var1 === 2){  return ('Prime Number');  }
    else{
      for(var i=2; i<var1; i++)
      {
        if(var1 % i === 0){ cnt++; }
      }
    }
    if(cnt == 0){ return ('Prime Number');  }
    else{ return ('Not Prime Number');  }
  }
}

