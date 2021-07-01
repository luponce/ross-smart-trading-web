import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// PAGES
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from '../modules/material/material.module';
import { BotonRedesSocialesComponent } from './components/boton-redes-sociales/boton-redes-sociales.component';

@NgModule({
  declarations: [
    MainNavComponent,
    LoginComponent,
    BotonRedesSocialesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
