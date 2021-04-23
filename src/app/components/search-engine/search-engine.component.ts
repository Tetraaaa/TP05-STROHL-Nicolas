import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  constructor() {
    
  }

  ngOnInit(): void {
  }

  onFilter()
  {
    console.log(this.nameFilter)
    console.log(this.priceFilter)
  }

}
