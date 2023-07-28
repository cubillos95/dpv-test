import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GalleryModule } from 'src/app/shared/components/gallery/gallery.module';
import { CharModule } from 'src/app/shared/components/char/char.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GalleryModule,
    CharModule
  ]
})
export class HomeModule { }
