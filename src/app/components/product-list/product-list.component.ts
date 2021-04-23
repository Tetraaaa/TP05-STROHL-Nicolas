import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from 'actions/AddProduct';
import { Product } from 'models/Product';
import { Observable } from 'rxjs';
import { BasketState } from 'state/Basket';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  @Input() products:Array<any> = [];
  products$: Observable<Product[]>;
  constructor(private store:Store) { 
  }

  ngOnInit(): void {
    this.products$ = this.store.select(BasketState.getProducts);
  }

  onProductClicked(product:Product)
  {
    this.store.dispatch(new AddProduct(product));
  }

  

}
