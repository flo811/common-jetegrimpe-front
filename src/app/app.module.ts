import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';

import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";

//import { ReactiveFormsModule } from '@angular/forms';

import { StatutConnecteService } from "./auth/statut-connecte.service";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AccountCreateComponent } from './account-create/account-create.component';

import { ProductItemComponent } from './graphicalElements/product-item/product-item.component';
import { CategoryItemsComponent } from './graphicalElements/category-items/category-items.component';

import { CategoriesPreviewComponent } from './graphicalElements/categories-preview/categories-preview.component';
import { MenuComponent } from './graphicalElements/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';

import { CreateProductFormComponent } from './graphicalElements/create-product-form/create-product-form.component';
import { StatutAdminService } from './auth/statut-admin.service';
import { SearchComponent } from './pages/search/search.component';

import { OrderManagementComponent } from './pages/order-management/order-management.component';
import { ModifyProductComponent } from './graphicalElements/modify-product/modify-product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PanierDisplayComponent } from './pages/panier-display/panier-display.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [
  { path: 'creer-compte', component: AccountCreateComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'detail/:name', component: ProductDetailComponent },
  { path: 'produits/:type', component: SearchComponent },
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'gestion-des-produits', component: OrderManagementComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'panier', component: PanierDisplayComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'createProduct', component: CreateProductFormComponent, canActivate: [StatutAdminService] }, // accessible uniquement si admin
];

@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    AccountCreateComponent,
    MenuComponent,
    HomeComponent,
    AuthComponent,
    ProductItemComponent,
    CategoryItemsComponent,
    CategoriesPreviewComponent,
    SearchComponent,
    OrderManagementComponent,
    ModifyProductComponent,
    ContactComponent,
    //    ReactiveFormsModule
    CreateProductFormComponent,
    ProductDetailComponent,
    PanierDisplayComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }