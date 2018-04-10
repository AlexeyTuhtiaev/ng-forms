import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {reject} from "q";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  answers = [{type: 'yes', text:'Yes!'},
            {type: 'no', text:'No!'}];

  charsCount = 5;

  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], [this.checkForEmail]),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit(){
    console.log('Submited', this.form);
  }

  checkForLength (control: FormControl){
    if(control.value.length <= this.charsCount){
      return {
        'lengthError': true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl): Promise<any>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.by'){
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000)
    });
  }
}
