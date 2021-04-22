import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from 'models/Product';
import { Observable } from 'rxjs';
import { BasketState } from 'state/Basket';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  products$: Observable<Product[]>;
  productsLength:number;
  totalPrice:number;
  isLoggedIn:boolean = false;
  constructor(private store:Store) { 
  }

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem("jwt");
    this.products$ = this.store.select(BasketState.getProducts);
    this.products$.subscribe((item) => {
      this.productsLength = item.length;
      this.totalPrice = item.reduce((a, b) => a+b.prix,0);
    });
  }

}
