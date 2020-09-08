import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './demo/vehiculo/vehiculo.component';
import { FabricanteComponent } from './demo/fabricante/fabricante.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    FabricanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
