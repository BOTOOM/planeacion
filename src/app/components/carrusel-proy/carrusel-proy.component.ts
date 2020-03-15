import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../../services/localjson.service';

@Component({
  selector: 'app-carrusel-proy',
  templateUrl: './carrusel-proy.component.html',
  styleUrls: ['./carrusel-proy.component.scss']
})
export class CarruselProyComponent implements OnInit {
  DatosAnte: any;

  constructor(
    private local: LocaljsonService
  ) { }

  ngOnInit() {
    this.local.get('ante_proy').subscribe( dato => {
      // console.log(dato);
      this.DatosAnte = dato;
      console.info(this.DatosAnte)
    }, (error_service) => {
      console.log(error_service);
    });
  }

}
