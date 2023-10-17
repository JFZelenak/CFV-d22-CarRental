import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  cars: Array<{type: string, year: number, image: string}> = [{
    type: "Audi",
    year: 2021,
    image: "./assets/images/audi.jpg"
  },{
    type: "chrysler",
    year: 2022,
    image: "./assets/images/chrysler.jpg"
  },{
    type: "Fiat",
    year: 2009,
    image: "./assets/images/fiat.jpg"
  }]

}
