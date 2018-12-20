import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/graphicalElements/services/product.service';
import { Product } from 'src/app/model/product';
import { ProductType } from 'src/app/model/productType';
import { PanierService } from 'src/app/graphicalElements/services/panier.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  product: Product = new Product("", "", "", 0, ProductType.Accessoire, true, 0)

  productDeleted: boolean =false;

  admin: boolean;

  constructor(private route: ActivatedRoute, private productService: ProductService, private _panierService: PanierService,
              private _authSrv: AuthService, private _router:Router) {
    this.productService.getByName(this.route.snapshot.paramMap.get("name"))
      .then(product => this.product = product)
      .catch(err => console.log(err));
  }

  isLessThan10(): boolean { return this.product.quantity < 10 }

  isAvailable(): boolean { return this.product.quantity > 0 }

  addToPanier() {
    this._panierService.addToPanier(this.product)
    this.product.quantity -= 1
  }

  deleteProduct() {

    if (confirm("Voulez vous vraiment supprimer ce produit?")) {

      this.productService.deleteProductByName(this.product.name)
                      .then(() => {this.productDeleted = true;
                                         setTimeout(() => {
                                           this._router.navigate(['/accueil'])
                                          }, 2000)})
                      .catch(err => console.log(err.message))

                      
    }

  }

  ngOnInit() {
    this._authSrv.verifierAuthentification().subscribe(col => { this.admin = col.estConnuEtAdmin(); console.log(this.admin) }); 
  }
}