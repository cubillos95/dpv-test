import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { SitesModule } from 'src/app/shared/components/sites/sites.module';
import { SitesinfModule } from 'src/app/shared/components/sitesinf/sitesinf.module';



@NgModule({
  declarations: [
    PlacesComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    SitesModule,
    SitesinfModule
  ]
})
export class PlacesModule { }
