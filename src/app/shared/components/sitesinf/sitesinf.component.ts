import { Component, Input } from '@angular/core';
import { LogService } from '../../../../app/core/services/log.service';
import { LocationModel } from 'src/app/core/models/model';

@Component({
  selector: 'app-sitesinf',
  templateUrl: './sitesinf.component.html',
  styleUrls: ['./sitesinf.component.scss']
})
export class SitesinfComponent {
  @Input() inf: any = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
    residents: [],
    url: '',
    created: '',
    episode: '',

  }
  constructor(
    public LogService:LogService) { }
  back(){
     this.LogService.LocationStatus = false
  }

}
