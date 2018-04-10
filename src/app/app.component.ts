import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  answers = [{type: 'yes', text:'Yes!'},
            {type: 'no', text:'No!'}];

  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required)
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit(){
    console.log('Submited', this.form);
  }
}
