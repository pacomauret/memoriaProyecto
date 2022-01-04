import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { InformacionComponent } from './informacion/informacion.component';
import { NuevaVisualizacionComponent } from './nueva-visualizacion/nueva-visualizacion.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { CanalesComponent } from './canales/canales.component';
import { ModoUsoComponent } from './modo-uso/modo-uso.component';
import { EstandarComponent } from './estandar/estandar.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'links', component: NuevaVisualizacionComponent },
  { path: 'conceptos', component: InformacionComponent },
  { path: 'conceptos/propiedades', component: PropiedadesComponent},
  { path: 'conceptos/canales', component: CanalesComponent},
  { path: 'conceptos/visualizaciones', component: ModoUsoComponent},
  { path: 'conceptos/estandar', component: EstandarComponent},

  // { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
