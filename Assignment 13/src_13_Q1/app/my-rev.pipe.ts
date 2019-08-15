import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value:string): string 
  {
    let temp:string = "";
    for(let i=0;i<value.length;i++)
    {
      temp = value[i]+temp;
    }
    return temp;
  }
}
