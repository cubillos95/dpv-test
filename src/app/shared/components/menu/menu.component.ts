import { Component } from '@angular/core';
import { getRoutes } from 'src/app/core/services/routes-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(
    private router: getRoutes) { }
  route(sitie:string){
      this.router.goSite(sitie)
  }
}
