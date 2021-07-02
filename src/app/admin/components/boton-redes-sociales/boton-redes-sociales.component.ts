import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-boton-redes-sociales',
  templateUrl: './boton-redes-sociales.component.html',
  styleUrls: ['./boton-redes-sociales.component.css'],
})
export class BotonRedesSocialesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sendWhatsapp() {
    return `https://api.whatsapp.com/send?phone=${environment.telefono}`;
  }
}
