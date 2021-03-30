import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { RemoveProduct } from 'actions/RemoveProduct';
import { Product } from 'models/Product';
import { Observable } from 'rxjs';
import { BasketState } from 'state/Basket';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.less']
})
export class PanierComponent implements OnInit {

  products$: Observable<Product[]>;
  products:Product[];
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.products$ = this.store.select(BasketState.getProducts);
    this.products$.subscribe(item => this.products = item);
  }

  onProductRemoved(product:Product)
  {
    this.store.dispatch(new RemoveProduct(product));
  }

}
