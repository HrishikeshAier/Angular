import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public textdata = "";
  @Input() public parent_msg;
  @Output() emterobj = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  send_to_parent()
  {
    this.emterobj.emit("Hello from Child");
  }
}
