import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistenciasComponent } from './resistencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResistenciasComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    ResistenciasComponent
  ]
})
export class ResistenciasModule { }
