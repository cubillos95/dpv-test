import { Component } from '@angular/core';
import { LogService } from '../../core/services/log.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  constructor(
    public LogService:LogService) { }
    openSearch(){
      this.LogService.searchStatus = true
    }
}
