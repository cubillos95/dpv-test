import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './episode.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { SitesModule } from 'src/app/shared/components/sites/sites.module';
import { SitesinfModule } from 'src/app/shared/components/sitesinf/sitesinf.module';



@NgModule({
  declarations: [
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    SitesModule,
    SitesinfModule
  ]
})
export class EpisodeModule { }
