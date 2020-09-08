import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './demo/vehiculo/vehiculo.component';
import { FabricanteComponent } from './demo/fabricante/fabricante.component';

const routes: Routes = [


  {path:'vehiculos',component: VehiculoComponent},
  {path:'fabricantes',component:FabricanteComponent},
  {path: '**', redirectTo: '/', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
