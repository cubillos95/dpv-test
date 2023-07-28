import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogService } from '../../../../app/core/services/log.service';
import { Character } from 'src/app/core/models/model';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Output() message = new EventEmitter<Character>();
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
  constructor(public LogService:LogService) { }
  selectCharacter(Character:Character){
    this.message.emit(Character);
  }
}
