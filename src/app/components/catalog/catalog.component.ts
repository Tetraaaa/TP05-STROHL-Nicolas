import { Component, OnInit } from '@angular/core';
import { Product } from 'models/Product';
import { filter } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
    loaded:boolean = false;
    nameFilter: string = "";
    subscriber = null;
    products: Product[] = [];
    filteredProducts:Product[] = [];
    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.subscriber = this.apiService.getProducts().subscribe((val: any) => {
            this.loaded = true;
            this.products = val;
            this.filteredProducts = val;
        });
    }

    onFilter() {
        this.filteredProducts = this.products.filter((product:Product) => product.titre.includes(this.nameFilter));
    }



}
