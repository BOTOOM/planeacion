import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnteProyectoComponent } from './pages/ante-proyecto/ante-proyecto.component';
import { ClasesComponent } from './pages/clases/clases.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Ante_proyecto', component: AnteProyectoComponent },
  { path: 'clases', component: ClasesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
