import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit {
  time : Date = null;

  ngOnInit() {
      setInterval(() => {
        this.time = new Date();
      }, 1500)
  }

}
