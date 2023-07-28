import { Component, Input } from '@angular/core';
import { Character } from 'src/app/core/models/model';
import { LogService } from '../../../core/services/log.service';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent {
  @Input() inf:Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
    name: '',
    url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  }
  constructor(
    public LogService:LogService) { }
  back(){
    this.LogService.characterStatus = false
  }

}
