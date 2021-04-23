import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchEngineComponent } from './components/search-engine/search-engine.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { BasketState } from 'state/Basket';
import { HeaderComponent } from './components/header/header.component';
import { PanierComponent } from './components/panier/panier.component';
import { DetailComponent } from './components/detail/detail.component';
import { RegisterComponent } from './components/register/register.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ApiHttpInterceptor } from './api-http-interceptor';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
    AccueilComponent,
    DashboardComponent
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
