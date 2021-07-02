import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// PAGES
import { LoginComponent } from './shared/login/login.component';
import { MaterialModule } from '../modules/material/material.module';
import { BotonRedesSocialesComponent } from './components/boton-redes-sociales/boton-redes-sociales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarseComponent } from './shared/registrarse/registrarse.component';
import { MainNavComponent } from './template/main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainNavComponent,
    LoginComponent,
    BotonRedesSocialesComponent,
    RegistrarseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }