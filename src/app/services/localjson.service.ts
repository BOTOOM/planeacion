import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

const urlfile = `./assets/files/`;

@Injectable({
  providedIn: 'root'
})
export class LocaljsonService {

  constructor(private http: HttpClient) {
    console.info("localjson funcionando");
    // this.get('ante_proy');
   }

   get(endpoint: string) {
    return this.http.get(`${urlfile}${endpoint}.json`);
   }
}
