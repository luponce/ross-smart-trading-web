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
import { HomeComponent } from './pages/home/home.component';
import { CarteraComponent } from './pages/cartera/cartera.component';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { EscuelaComponent } from './pages/escuela/escuela.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { ButtonComponent } from './components/button/button.component';
import { SATComponent } from './pages/sat/sat.component';
import { LATComponent } from './pages/lat/lat.component';

@NgModule({
  declarations: [
    MainNavComponent,
    LoginComponent,
    BotonRedesSocialesComponent,
    RegistrarseComponent,
    HomeComponent,
    CarteraComponent,
    AlertasComponent,
    EscuelaComponent,
    ConfiguracionComponent,
    ButtonComponent,
    SATComponent,
    LATComponent
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