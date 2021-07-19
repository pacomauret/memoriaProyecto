import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { InformacionComponent } from './informacion/informacion.component';
import { NuevaVisualizacionComponent } from './nueva-visualizacion/nueva-visualizacion.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'links', component: NuevaVisualizacionComponent },
  { path: 'informacion', component: InformacionComponent },
  // { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
