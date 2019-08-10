import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public primeres:string;
  public cntres:number;
  constructor(private num : NumberService, private str : StringService) { 
    this.primeres = this.num.ChkPrime(11);
    this.cntres = this.str.CountCapital('HrIsHiKeSh');
  }

  ngOnInit() {
  }
}

