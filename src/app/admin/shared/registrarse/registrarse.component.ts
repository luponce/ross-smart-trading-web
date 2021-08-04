import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MasterService } from '../../helpers/master.service';
import { Usuario } from '../../models/usuario.model';
import { RegistrarseService } from '../../services/registrarse.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  nombreFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  telefono: any = '';

  constructor(
    public masterService: MasterService,
    private registrarseService: RegistrarseService
  ) {}

  ngOnInit(): void {}

  registrarse() {
    const usuario: Usuario = {
      email: this.emailFormControl.value,
      password: this.passFormControl.value,
      nombre: this.nombreFormControl.value,
      telefono: this.telefono,
    };
    this.registrarseService.registrarse(usuario).subscribe((data) => {
      this.masterService.escribirConsola('USUARIO REGISTRADO: ', data);
      this.masterService.goTo('/admin/home');
    }, err => {
      this.masterService.snackBarPresent('Error al Registrarse. Contactese con el Administrador.');
      console.error('ERROR REGISTRARSE', err);
    });
  }
}
