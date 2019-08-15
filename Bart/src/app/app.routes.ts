import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ConcepcionCabreraComponent } from "./concepcion-cabrera/concepcion-cabrera.component";
import { TodosRapa2Component } from "./todos-rapa2/todos-rapa2.component";
import { Ep7aComponent } from "./ep7a/ep7a.component";
import { ServalComponent } from "./serval/serval.component";
import { ContactComponent } from "./contact/contact.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'concepcion-cabrera', component:ConcepcionCabreraComponent},
    { path: 'todos-rapa2', component:TodosRapa2Component},
    { path: 'ep7a', component:Ep7aComponent},
    { path: 'serval', component:ServalComponent},
    { path: 'contacto', component:ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});