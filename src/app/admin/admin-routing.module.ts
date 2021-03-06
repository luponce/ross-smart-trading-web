import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { MainNavComponent } from './template/main-nav/main-nav.component';
import { RegistrarseComponent } from './shared/registrarse/registrarse.component';
import { HomeComponent } from './pages/home/home.component';
import { CarteraComponent } from './pages/cartera/cartera.component';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { EscuelaComponent } from './pages/escuela/escuela.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { SATComponent } from './pages/sat/sat.component';
import { LATComponent } from './pages/lat/lat.component';
import { DetalleAlertaComponent } from './pages/detalle-alerta/detalle-alerta.component';
import { DetalleCarteraComponent } from './pages/detalle-cartera/detalle-cartera.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  {
    path: 'admin',
    component: MainNavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: 'cartera',
        component: CarteraComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'alertas',
        component: AlertasComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'escuela',
        component: EscuelaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent,
        canActivate: [AuthGuard],
      },
      { path: 'sat', component: SATComponent, canActivate: [AuthGuard] },
      { path: 'lat', component: LATComponent, canActivate: [AuthGuard] },
      {
        path: 'detalle-alerta/:id',
        component: DetalleAlertaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'detalle-cartera/:id',
        component: DetalleCarteraComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
