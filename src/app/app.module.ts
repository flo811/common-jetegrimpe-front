import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';

import {FormsModule} from "@angular/forms";
//import { ReactiveFormsModule } from '@angular/forms';

import {StatutConnecteService} from "./auth/statut-connecte.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import { AccountCreateComponent } from './account-create/account-create.component';

import { ProductItemComponent } from './graphicalElements/product-item/product-item.component';
import { AjouterPanierComponent } from './graphicalElements/ajouter-panier/ajouter-panier.component';
import { CategoryItemsComponent } from './graphicalElements/category-items/category-items.component';
import { CategoriesPreviewComponent } from './graphicalElements/categories-preview/categories-preview.component';
import { MenuComponent } from './graphicalElements/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {path: 'accueil', component: HomeComponent},
  { path:'tech', component: TechComponent, canActivate:[StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path:'auth', component: AuthComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    AccountCreateComponent,
    MenuComponent,
    HomeComponent,
    ProductItemComponent,
    AjouterPanierComponent,
    CategoryItemsComponent,
    CategoriesPreviewComponent
//    ReactiveFormsModule

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }