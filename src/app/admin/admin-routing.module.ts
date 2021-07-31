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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  // { path: 'admin', component: MainNavComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: MainNavComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'cartera', component: CarteraComponent },
    { path: 'alertas', component: AlertasComponent },
    { path: 'escuela', component: EscuelaComponent },
    { path: 'configuracion', component: ConfiguracionComponent },
    { path: 'sat', component: SATComponent },
    { path: 'lat', component: LATComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
