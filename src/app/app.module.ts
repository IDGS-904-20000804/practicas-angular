import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanciaModule } from './distancia/distancia.module';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { FormsModule } from '@angular/forms';
import { ResistenciasModule } from './resistencias/resistencias.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DistanciaModule,
    ResistenciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
