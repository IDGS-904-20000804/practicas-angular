import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'CineComponent', component: CineComponent },
    { path: 'DistanciaComponent', component: DistanciaComponent },
    { path: 'ResistenciasComponent', component: ResistenciasComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
