import { Component, OnInit } from '@angular/core';
import { LogService } from '../../core/services/log.service';
import { Episode } from 'src/app/core/models/model';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  constructor(
    public LogService:LogService) { }
  ngOnInit() {
    this.LogService.ReadEpisode()
  }
  receiveMessage(place:Episode){
    this.LogService.Episode = place
    this.LogService.LocationStatus = true
  }
}
