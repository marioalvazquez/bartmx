import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ConcepcionCabreraComponent } from './concepcion-cabrera/concepcion-cabrera.component';
import { TodosRapa2Component } from './todos-rapa2/todos-rapa2.component';
import { ServalComponent } from './serval/serval.component';
import { Ep7aComponent } from './ep7a/ep7a.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ConcepcionCabreraComponent,
    TodosRapa2Component,
    ServalComponent,
    Ep7aComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
