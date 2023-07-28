import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LogService } from '../../core/services/log.service';

@Injectable({
  providedIn: 'root',
})
export class getRoutes {
  constructor(
    private router: Router,
    public LogService:LogService
  ) {}
    goSite(site:string){
      this.LogService.LocationStatus = false
      this.LogService.characterStatus = false
      this.router.navigate(['/' + site]);
    }
}
