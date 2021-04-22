import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuard } from './auth.guard';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:"panier", component:PanierComponent, pathMatch:"full", canActivate:[AuthGuard]},
  {path:"details/:id", component:DetailComponent, pathMatch:"full", canActivate:[AuthGuard]},
  {path:"catalogue", component:CatalogComponent, pathMatch:"full", canActivate:[AuthGuard]},
  {path:"", component:AccueilComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
