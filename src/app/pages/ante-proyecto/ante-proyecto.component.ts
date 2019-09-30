import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../../services/localjson.service';


@Component({
  selector: 'app-ante-proyecto',
  templateUrl: './ante-proyecto.component.html',
  styleUrls: ['./ante-proyecto.component.scss']
})
export class AnteProyectoComponent implements OnInit {

  constructor(
    private local: LocaljsonService
  ) {
   }

  ngOnInit() {
    this.local.get('ante_proy').subscribe( dato => {
      console.log(dato);
    }, (error_service) => {
      console.log(error_service);
    });
  }

}