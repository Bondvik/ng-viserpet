import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  isDistanse = true;
  countDownDate = new Date("September 11, 2022 15:37:25").getTime();
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateCount();
  }

  updateCount() {
    let x = setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        this.isDistanse = false;
        clearInterval(x)
      }
    }, 1000)
  }

}
