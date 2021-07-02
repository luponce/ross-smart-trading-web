import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  escribirConsola(mensaje: string, objeto: any) {
    console.log(`%c ${mensaje} `, 'color:#73c1ff; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;', objeto);
  }
}
