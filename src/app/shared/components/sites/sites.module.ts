import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites.component';



@NgModule({
  declarations: [
    SitesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SitesComponent]
})
export class SitesModule { }
