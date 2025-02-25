import { Component } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
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
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+\@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      edad: new FormControl(0, [
        Validators.min(18),
        Validators.max(65)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
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

  checkControl(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
  }

  dniValidator(controlName: AbstractControl): any {
    // validar un dni esta descrito que tiene que tener 8 caracteres de tipo numerico y la letra mayuscula con expresiones regulares
    // tiene que permitir un array que te proporciona la fábrica de moneda y timbre.
    // numero / 23 = 7
    // el siete es la posición de la letra dentro del array 
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    let dni: string = controlName.value;
    if (dni) {
      dni = dni.toUpperCase();
    }
    const exp = /^\d{8}[A-Z]{1}/

    if( exp.test(dni)){
      // separar la letra del número del DNI
      const letra: string | undefined = dni.at(-1);
      const numero: number = Number(dni.substring(0, dni.length - 1)) 
      const posicion = numero % 23;
      
      // if(letrasDni[posicion] !== letra){
      //   return {'dnivalidator': 'La letra del dni no corresponde con número'}
      // }else{
      //   return null
      // }

      // con ternaria
      return (letrasDni[posicion] !== letra) ? {'dnivalidator': 'La letra del dni no corresponde con número'} : null

    }else{
      return {'dnivalidator': 'Formato del DNI incorrecto'}
    }
  }
}
