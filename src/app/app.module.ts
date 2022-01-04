import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import { NuevaVisualizacionComponent } from './nueva-visualizacion/nueva-visualizacion.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormsModule } from '@angular/forms';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { CanalesComponent } from './canales/canales.component';
import { ModoUsoComponent } from './modo-uso/modo-uso.component';
import { EstandarComponent } from './estandar/estandar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    NuevaVisualizacionComponent,
    InformacionComponent,
    PropiedadesComponent,
    CanalesComponent,
    ModoUsoComponent,
    EstandarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
