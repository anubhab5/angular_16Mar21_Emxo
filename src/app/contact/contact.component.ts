import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'test-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit, AfterViewChecked {

  contactForm;

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {

  }

  // component object has been created/ instantiated.
  ngOnInit(): void {
    this.instantiateForm();
    console.log("in ng on init");
  }

  ngAfterViewInit() {
    debugger
  }

  ngAfterViewChecked() {
    debugger
  }

  // last lifecycle hook that gets called.
  ngOnDestroy() {
    debugger
  }

  instantiateForm() {
    this.contactForm = this.fb.group({
      name: ['Jack', Validators.min(2)],
      email: [''],
      phone: [''],
      hobby: ['']
    });
  }

  showData() {
    this.contactForm.value
  }

}
