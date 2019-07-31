import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
 
  public Technology = 'Angular';
  public IsSet=true;
  public MyColor1="Orange";
  public MyColor2="Brown";


  ngOnInit() {
  }

  fun(){
    return "this is fun call";
  }

}
