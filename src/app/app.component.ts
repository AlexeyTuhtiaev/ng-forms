import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  title = 'app';

  answers = [{type: 'yes', text:'Yes!'},
            {type: 'no', text:'No!'}];

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  formData = {};
  isSubmited = false;

  submitForm(){
    console.log('submit !!', this.form);
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }

  addRandEmail(){
    const randEmail= 'test@gmail.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });

    this.form.form.patchValue({
     user: {email: 'testPatchValue@gmail.com'}
    });


  }
}
