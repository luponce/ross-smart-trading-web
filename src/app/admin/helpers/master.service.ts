import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

  logout() {
    localStorage.removeItem('user');
    this.goTo('/login');
  }

  escribirConsola(mensaje: string, objeto: any) {
    console.log(
      `%c ${mensaje} `,
      'color:#73c1ff; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',
      objeto
    );
  }

  snackBarPresent(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok');
  }
}
