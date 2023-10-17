import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cars: Array<{type: string, year: number, image: string}> = [{
    type: "Audi",
    year: 2021,
    image: "./assets/images/audi.jpg"
  },{
    type: "Chrysler",
    year: 2022,
    image: "./assets/images/chrysler.jpg"
  },{
    type: "Fiat",
    year: 2009,
    image: "./assets/images/fiat.jpg"
  }]

  info = new FormGroup({
    type: new FormControl('',Validators.required),
    year: new FormControl('',Validators.required),
    image: new FormControl(''),
  });

  onSubmitForMyForm(){
    if(this.info.valid){
      console.log(this.info.value);
      let value: any = this.info.value;
      this.cars.push(value),
      this.info.reset();
      console.log(this.cars);
      localStorage.setItem('cars',JSON.stringify(this.cars))
    } else {
      alert("required input missing");
    }
  }

  ngOnInit(): void {
    // this.cars = JSON.parse(localStorage.getItem("cars"));
  }
}
