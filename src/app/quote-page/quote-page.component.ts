import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.scss']
})
export class QuotePageComponent implements OnInit {
  quoteForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormControls();
  }


  createFormControls(): void {
    this.quoteForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.quoteForm.controls;
  }

  submitForm() {
    console.log('form has nowhere to go, reset form');
    this.createFormControls();
  }
}
