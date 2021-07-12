import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '#PSP';
  topic = 'angular';
  click_name = "PSP";
  arr = ['psp', 'abc', 'pqr']
  getArr() {
    return this.arr;
  }
  object = {
    name: this.title,
    topic: this.topic
  }
  getEvent(arg: any) {
    alert(arg);
  }
  myEvent(evt: any) {
    console.log(evt);
  }
  getVal(val: any) {
    console.log(val);
  }
  show="psp";
  clr='red'
}
