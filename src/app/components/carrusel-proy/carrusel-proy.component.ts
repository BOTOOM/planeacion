import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../../services/localjson.service';

@Component({
  selector: 'app-carrusel-proy',
  templateUrl: './carrusel-proy.component.html',
  styleUrls: ['./carrusel-proy.component.scss']
})
export class CarruselProyComponent implements OnInit {
  DatosAnte: any;
  DatosProy: any;

  constructor(
    private local: LocaljsonService
  ) { }

  ngOnInit() {
    this.local.get('ante_proy').subscribe( dato => {
      // console.log(dato);
      this.DatosAnte = dato;
      console.log(this.DatosAnte);
    }, (error_service) => {
      console.log(error_service);
    });
    this.local.get('proy').subscribe( dato => {
      // console.log(dato);
      this.DatosProy = dato;
      console.log(this.DatosProy);
    }, (error_service) => {
      console.log(error_service);
    });
  }

}
