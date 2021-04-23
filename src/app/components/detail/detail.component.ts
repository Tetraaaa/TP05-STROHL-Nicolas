import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddProduct } from 'actions/AddProduct';
import { ApiService } from 'src/app/services/api-service/api.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  id:number;
  
  productDetails:{id:number, titre:string, prix:number, description:string}
  constructor(private apiService:ApiService, private route:ActivatedRoute, private store:Store) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.apiService.getProduct(this.id).subscribe((val:any) => this.productDetails = val)
  }

  onProductClicked()
  {
    this.store.dispatch(new AddProduct(this.productDetails));
  }

}
