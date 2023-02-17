import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  registrationForm!: FormGroup;

  public details={
    firstName:'',
    lastName:'',
    address:'',
    email:'',
    password:'',
    mobile:'',
    message:''
  }
 

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z\s\.]*$')]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z\s\.]*$')]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required]]
    })
  }

  saveDetails(form: FormGroup) {
    if (form.valid) {
      this.details.firstName=form.value.fname;
      this.details.lastName=form.value.lname;
      this.details.address=form.value.address;
      this.details.email=form.value.email;
      this.details.password=form.value.password;
      this.details.mobile=form.value.phonenumber;
      this.details.message=form.value.message;
      this.registrationForm.reset();
    }
  }
  onReset() {
    this.registrationForm.reset();
  }
}
