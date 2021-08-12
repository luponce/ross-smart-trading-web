import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-alerta',
  templateUrl: './detalle-alerta.component.html',
  styleUrls: ['./detalle-alerta.component.css']
})
export class DetalleAlertaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log('ID DETALLE: ', this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

}
