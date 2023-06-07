import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingProviders} from "./app-routing.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IsesionComponent } from './isesion/isesion.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsComponent } from './forms/forms.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    IsesionComponent,
    HomeComponent,
    NavComponent,
    PerfilComponent,
    FormsComponent,
    PreguntasComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
