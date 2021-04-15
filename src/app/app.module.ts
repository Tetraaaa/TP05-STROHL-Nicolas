import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { BasketState } from 'state/Basket';
import { HeaderComponent } from './header/header.component';
import { PanierComponent } from './panier/panier.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductListComponent,
    SearchEngineComponent,
    HeaderComponent,
    PanierComponent,
    DetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([BasketState], {
      developmentMode:!environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
