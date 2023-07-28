import { Component, OnInit } from '@angular/core';
import { LogService } from '../../core/services/log.service';
import { getRoutes } from 'src/app/core/services/routes-service';
import { Character } from 'src/app/core/models/model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
     public LogService:LogService,
     private router: getRoutes) { }
  ngOnInit() {
      this.LogService.readCharacte()
  }
  receiveMessage(data:Character){
    this.LogService.characterStatus = true
    this.LogService.character = data
  }
}
