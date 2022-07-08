import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  days = 167;
  hours = 12;
  min = 16;
  sec = 8;

  constructor() { }

  ngOnInit(): void {
  }

}
