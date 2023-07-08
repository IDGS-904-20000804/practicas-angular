import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DistanciaModule } from './distancia/distancia.module';
import { ResistenciasModule } from './resistencias/resistencias.module';
import { CineModule } from './cine/cine.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { PizzasModule } from './pizzas/pizzas.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    DistanciaModule,
    ResistenciasModule,
    CineModule,
    AppRoutingModule,
    PizzasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
