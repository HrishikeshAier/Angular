import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public strdata = "Marvellous Infosystems";

  constructor() { }

  ngOnInit() {
  }

  fun()
  {
    return "Call fun by using string interpolation : "+this.strdata;
  }
}
