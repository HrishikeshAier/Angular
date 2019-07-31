import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-bind',
  templateUrl: './pro-bind.component.html',
  styleUrls: ['./pro-bind.component.css']
})
export class ProBindComponent implements OnInit {

  public ID:number = 786;
  public IsSet:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
