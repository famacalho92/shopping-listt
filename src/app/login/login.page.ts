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


}
