import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public addres:number;
  public subres:number;

  constructor(private arithmat : ArithmeticService) { 
    this.addres = this.arithmat.Add(40,20);
    this.subres = this.arithmat.Sub(40,20);
  }

  ngOnInit() {
  }
}
