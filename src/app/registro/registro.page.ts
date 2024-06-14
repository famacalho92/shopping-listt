import { Component} from '@angular/core';
import {
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage    {
  
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl ("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
   }
  guardar() {
    // Aquí puedes agregar la lógica para manejar el evento de ingreso
    console.log('Ingresar button clicked');
  }

}
