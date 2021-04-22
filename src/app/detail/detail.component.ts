import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddProduct } from 'actions/AddProduct';
import { Product } from 'models/Product';
import { Observable } from 'rxjs';
import { BasketState } from 'state/Basket';
import { FormulaireService } from '../formulaire.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  id:number;
  
  productDetails:{id:number, titre:string, prix:number, description:string}
  constructor(private formulaireService:FormulaireService, private route:ActivatedRoute, private store:Store) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.formulaireService.getProduct(this.id).subscribe((val:any) => this.productDetails = val)
  }

  onProductClicked()
  {
    this.store.dispatch(new AddProduct(this.productDetails));
  }

}
