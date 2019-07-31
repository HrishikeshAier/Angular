import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  public dispdata = 'Marvellous Infosystems';
  fun2()
  {
    return this.dispdata = "MARVELLOUS INFOSYSTEMS";
  }
  fun3()
  {
    return this.dispdata = "marvellous infosystems";
  }

  /*public showdata = 'Marvellous Infosystems';
  public showdata1 = 'Marvellous Infosystems';
  fun()
  {
    return "show data :"+this.showdata;
  }
  fun1()
  {
    return this.showdata1 = "Educating for Better tomorrow";
  }*/
}
