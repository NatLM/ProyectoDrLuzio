import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsesionComponent } from './isesion/isesion.component';
import { FormsComponent } from './forms/forms.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PerfilComponent } from './perfil/perfil.component';

//deben importarse todos los componentes y registrarlos en el path

const routes: Routes = [
  {path:'',component:IsesionComponent},
  {path: 'forms', component:FormsComponent},
  {path: 'preguntas', component:PreguntasComponent},
  {path: 'resultado', component:ResultadoComponent},
  {path: 'home', component:HomeComponent},
  {path: 'nav', component:NavComponent},
  {path: 'perfil', component:PerfilComponent},
];

export const appRoutingProviders: any[]=[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
