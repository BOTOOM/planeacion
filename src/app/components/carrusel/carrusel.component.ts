import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../../services/localjson.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

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
