import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'CineComponent', component: CineComponent },
    { path: 'DistanciaComponent', component: DistanciaComponent },
    { path: 'ResistenciasComponent', component: ResistenciasComponent },
    { path: 'PizzasComponent', component: PizzasComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
