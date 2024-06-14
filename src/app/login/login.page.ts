import { Component } from '@angular/core';
import {
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage   {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl ("", Validators.required),
      'password': new FormControl("", Validators.required)
    }); 
   }
  // Método para manejar el evento de ingreso
  ingresar() {
    // Aquí puedes agregar la lógica para manejar el evento de ingreso
    console.log('Ingresar button clicked');
  }

}
