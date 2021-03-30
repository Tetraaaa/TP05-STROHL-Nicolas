import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddProduct } from 'actions/AddProduct';
import { Product } from 'models/Product';
import { Observable } from 'rxjs';
import { BasketState } from 'state/Basket';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  id:number;
  productDetails:{id:number, name:string, price:number, description:string}
  constructor(private route:ActivatedRoute, private store:Store) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.productDetails = this.details.find(item => item.id === this.id)
  }

  onProductClicked()
  {
    this.store.dispatch(new AddProduct(this.productDetails));
  }


  details = [
    {"id":1, "name":"Porte éponge en laiton", "price":30, description:"Permet de porter les éponges et est fabriqué en laiton."},
    {"id":2, "name":"Sac de cinq kilos de sel", "price":15, description:"Du bon sel de mer stocké dans un bon sac de cinq bons kilos."},
    {"id":3, "name":"Bouteille d'eau remplie d'eau", "price":1, description:"De l'eau tout à fait normale. Rien de louche ici."},
    {"id":4, "name":"Pass navigo d'occasion", "price":5, description:"Utilisé seulement 3 fois entre 1995 et 2010."},
    {"id":5, "name":"Paquet de 10 Twix presque neuf", "price":4, description:"Il en reste quatre je crois."},
    {"id":6, "name":"Courroie de distribution + pompe à eau", "price":80, description:"80 euros mais la main d'oeuvre sera 300 environ"},
    {"id":7, "name":"Naruto Tome 12", "price":5, description:"Désolé on a pas les autres"},
    {"id":8, "name":"Barbecue à charbon de bois en acier inoxydable", "price":150, description:"Quelqu'un veut une chipo ?"}
  ];



}
