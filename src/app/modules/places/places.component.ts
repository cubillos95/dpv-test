import { Component, OnInit } from '@angular/core';
import { LogService } from '../../core/services/log.service';
import { LocationModel } from 'src/app/core/models/model';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  constructor(
    public LogService:LogService) { }
  ngOnInit() {
    this.LogService.ReadLocation()
  }

  receiveMessage(place:LocationModel){
    this.LogService.Location = place
    this.LogService.LocationStatus = true
  }
}
