import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  answers = [{type: 'yes', text:'Yes!'},
            {type: 'no', text:'No!'}];

  submitForm(form: NgForm){

    console.log('submit !!', form);

  }
}
