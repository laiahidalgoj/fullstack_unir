import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  imports: [ReactiveFormsModule],
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.css'
})
export class FormModelComponent {

  userForm: FormGroup;

  constructor(){
    this.userForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      edad: new FormControl(0, [
        Validators.required,
      ]),
      dni: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      repitepassword: new FormControl('', [
        Validators.required,
      ]),

    }, [])
  }

  getDataForm(){
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
