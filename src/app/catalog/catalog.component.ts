import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { FormulaireService } from '../formulaire.service';

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
  constructor(private formulaireService: FormulaireService) { 
    this.subscriber = formulaireService.getProducts().subscribe((val:any) => this.products = val)
  }

  ngOnInit(): void {
  }

  onFilter()
  {
    console.log("ben voyons")
  }



}
