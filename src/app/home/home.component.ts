import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  count : number = 0;
  
  // name = new FormControl('');

  info = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', Validators.required)
  })

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

  onSubmitForMyForm(){
    if(this.info.valid){
      console.log(this.info.value);
      let value: any = this.info.value;
      this.students.push(value),
      this.info.reset();
    }
  }
}
