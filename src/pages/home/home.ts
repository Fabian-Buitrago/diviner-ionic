import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  num: number;
  message: string = '...';
  secretNum: number;
  attempts: number = 10;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.randomNumber(0, 100);
  }

  randomNumber(a, b) {
    this.secretNum = Math.round(
      Math.random() * (b - a) + parseInt(a)
    );
  }

  CheckNumber() {
    if (this.num) {
      if (this.secretNum < this.num) {
        this.message = 'minor';
        this.attempts -= 1;
      }
      else if (this.secretNum > this.num) {
        this.message = 'major';
        this.attempts -= 1;
      }
      else {
        this.message = 'equal';
      }
    }
  }

  replay() {
    this.num = null;
    this.message = '...';
    this.randomNumber(0, 100);
    this.attempts = 10;
  }
}
