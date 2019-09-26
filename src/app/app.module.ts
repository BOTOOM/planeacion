import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { AnteProyectoComponent } from './pages/ante-proyecto/ante-proyecto.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ClaseComponent } from './components/clase/clase.component';
import { MapasComponent } from './pages/mapas/mapas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProyectoComponent,
    AnteProyectoComponent,
    ClasesComponent,
    ClaseComponent,
    MapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
