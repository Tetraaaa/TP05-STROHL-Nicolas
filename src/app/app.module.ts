import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

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
import { ConnexionComponent } from './connexion/connexion.component';
import { ApiHttpInterceptor } from './api-http-interceptor';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductListComponent,
    SearchEngineComponent,
    HeaderComponent,
    PanierComponent,
    DetailComponent,
    RegisterComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilComponent
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
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ApiHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
