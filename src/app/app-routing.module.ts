import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AuthGuard } from './auth.guard';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';
import { PanierComponent } from './components/panier/panier.component';

const routes: Routes = [
  {path:"", component:AccueilComponent, pathMatch:"full"},
  { 
    path: 'home',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children : [
      {path:"panier", component:PanierComponent, pathMatch:"full", canActivate:[AuthGuard]},
      {path:"details/:id", component:DetailComponent, pathMatch:"full", canActivate:[AuthGuard]},
      {path:"catalogue", component:CatalogComponent, pathMatch:"full", canActivate:[AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
