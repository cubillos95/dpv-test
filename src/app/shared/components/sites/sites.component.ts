import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationModel } from 'src/app/core/models/model';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent {
  @Output() message = new EventEmitter<any>();
  @Input() inf: any = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
    residents: [],
    url: '',
    created: '',
    episode: ''
  }
  selectPlace(place:LocationModel){
    this.message.emit(place);
  }
}
