import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value1: number,value2: string): string 
  {
    if(value2 == "Even")
    {
      if(value1%2 == 0){  return "It is Even number"}
      else{ return "It is not Even number"}
    }
    if(value2 == "Odd")
    {
      if(value1%2 == 0){  return "It is not Odd number"}
      else{ return "It is Odd number"}
    }
    if(value2 == "Prime")
    {
      var cnt = 0;
      if(value1 === 1){ return "It is Prime number"}
      else if(value1 === 2){ return "It is Prime number"}
      else{
        for(var i = 2; i<value1; i++)
        {
          if(value1%i == 0){  cnt = cnt+1;  }
        }
      }
      if(cnt > 0){ return "It is not Prime number"}
      else { return "It is Prime number"}
    }
    if(value2 == "Perfect")
    {
      var temp = 0;
      for(var i=0; i<value1; i++)
      {
        if(value1%i == 0){  temp = temp+i }
      }
      if(value1 == temp){ return "It is Perfect number"}
      else { return "It is not Perfect number"}
    }
  }
}
