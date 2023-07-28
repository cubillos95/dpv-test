import { Component } from '@angular/core';
import { LogService } from '../../../core/services/log.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  inputValue: string = ''
  constructor(
    public LogService:LogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }
  back(){
      this.LogService.searchStatus = false
  }
  go(){
    if(this.inputValue){
      this.LogService.search(this.inputValue,this.router.url)
      this.back()
    }
  }
  inputData(event: any) {
    this.inputValue = event.target.value
  }
}
