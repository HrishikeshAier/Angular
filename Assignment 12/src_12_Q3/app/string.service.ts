import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(str:string) {
    var count=0,len=str.length;
    for(var i=0;i<len;i++) {
      if(/[A-Z]/.test(str.charAt(i))) count++;
    }
    return count;
  }
}


