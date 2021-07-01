import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-redes-sociales',
  templateUrl: './boton-redes-sociales.component.html',
  styleUrls: ['./boton-redes-sociales.component.css']
})
export class BotonRedesSocialesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redireccionarWhatsapp() {
    console.log('WHATSAPP');
  }
}
