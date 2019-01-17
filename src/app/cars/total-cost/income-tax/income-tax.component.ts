import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-income-tax',
  templateUrl: './income-tax.component.html',
})
export class IncomeTaxComponent implements OnInit {

  private incomeTax : number = 18;
  income : number;

  constructor() { }

  ngOnInit() {
  }

}
