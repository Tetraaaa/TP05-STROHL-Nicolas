import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:"panier", component:PanierComponent, pathMatch:"full"},
  {path:"details/:id", component:DetailComponent, pathMatch:"full"},
  {path:"", component:CatalogComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
