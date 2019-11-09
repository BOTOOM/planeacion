import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../../services/localjson.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  panelOpenState = false;
  DatosClases: any;
  Tam_row: number;

  constructor(
    private local: LocaljsonService
  ) { }

  ngOnInit() {
    this.local.get('clases').subscribe( dato => {
      // console.log(dato);
      this.DatosClases = dato;
      this.Tam_row = this.DatosClases.length;
      console.info(this.Tam_row)
      console.info(this.DatosClases)
    }, (error_service) => {
      console.log(error_service);
    });
  }

}
