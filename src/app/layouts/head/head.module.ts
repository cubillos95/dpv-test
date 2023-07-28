import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';



@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports:[
    HeadComponent
  ]
})
export class HeadModule { }
