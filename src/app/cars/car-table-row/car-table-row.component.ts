import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Car} from "../models/car";

@Component({
  selector: '[cs-car-table-row]',
  templateUrl: './car-table-row.component.html'
})
export class CarTableRowComponent implements OnInit {
  @Input() car : Car;
  @Output() removedCar = new EventEmitter();

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  removeCar(car, event) {
    event.stopPropagation();
    this.removedCar.emit(car);
  }

}
