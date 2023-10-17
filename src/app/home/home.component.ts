import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  count : number = 0;

  students: Array<{name: string, age: number}> = [{
    name: "David",
    age: 30
  },{
    name: "Sue",
    age: 25
  },{
    name: "Kim",
    age: 40
  }]

  countClick() {
    this.count++;
  }
}
