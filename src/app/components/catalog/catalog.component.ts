import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  subscriber = null;
  products:Array<any> = [];
  nameFilter:string = "";
  priceFilter:number = null;
  constructor(private apiService: ApiService) { 
    this.subscriber = apiService.getProducts().subscribe((val:any) => this.products = val)
  }

  ngOnInit(): void {
  }

  onFilter()
  {
    console.log("ben voyons")
  }



}
