import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharComponent } from './char.component';



@NgModule({
  declarations: [
    CharComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CharComponent]
})
export class CharModule { }
