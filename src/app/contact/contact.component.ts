import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  info = new FormGroup({
    fName: new FormControl('',Validators.required),
    lName: new FormControl('',Validators.required),
    age: new FormControl(''),
    email: new FormControl('',Validators.required),
  });

  contacts: Array<{fName: string, lName: string, age: number, email: string}> = [];

  onSubmitForMyForm(){
    if(this.info.valid){
      console.log(this.info.value);
      let value: any = this.info.value;
      this.contacts.push(value),
      this.info.reset();
      console.log(this.contacts);
    } else {
      alert("required input missing");
    }
  }
}
