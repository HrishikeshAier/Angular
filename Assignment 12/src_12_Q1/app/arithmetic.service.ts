import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  Sub(var1:number,var2:number)
  {
    return(var1-var2);
  }
  Add(var1:number,var2:number)
  {
    return(var1+var2);
  }

}
