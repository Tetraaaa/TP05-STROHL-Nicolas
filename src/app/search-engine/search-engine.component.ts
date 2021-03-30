import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.less']
})
export class SearchEngineComponent implements OnInit {
  @Input() nameFilter : string = "";
  @Input() priceFilter : number = null;
  @Output() nameFilterChange = new EventEmitter();
  @Output() priceFilterChange = new EventEmitter();
  constructor(dataService:DataServiceService) {
    
  }

  ngOnInit(): void {
  }

  onFilter()
  {
    console.log(this.nameFilter)
    console.log(this.priceFilter)
  }

}
