import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MasterService } from '../../helpers/master.service';
import { Login } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(
    public masterService: MasterService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  login() {
    const login: Login = {
      email: this.emailFormControl.value,
      password: this.passFormControl.value
    };
    this.loginService.login(login).subscribe(data => {
      this.masterService.escribirConsola('INGRESO USUARIO: ', data);
      this.masterService.goTo('/admin/home');
    }, err => {
      this.masterService.snackBarPresent('Credenciales incorrectas. Ingrese Usuario y Contraseña validos.');
      console.error('ERROR LOGIN', err);
    });
  }
}
