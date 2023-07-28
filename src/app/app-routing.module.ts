import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },{
    path: 'places',
    loadChildren: () =>
      import('./modules/places/places.module').then(m => m.PlacesModule),
  },
  {
    path: 'episode',
    loadChildren: () =>
      import('./modules/episode/episode.module').then(m => m.EpisodeModule),
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
