import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetalle(id: number) {
    this.router.navigate(['admin/detalle-alerta', id])
  }

}
