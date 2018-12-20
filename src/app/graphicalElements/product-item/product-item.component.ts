import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';
import { PanierService } from '../services/panier.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  @Output() toDelete : EventEmitter<void> = new EventEmitter<void>();

  admin: boolean;

  constructor(private _router: Router, private _panierService: PanierService, private _authSrv: AuthService, private productSrv: ProductService) {

    this._authSrv.collegueConnecteObs
      .subscribe(col => { this.admin = col.estConnuEtAdmin() });
  }

  isLessThan10(): boolean { return this.product.quantity < 10 }

  isAvailable(): boolean { return this.product.quantity > 0 }

  addToPanier() {
    this._panierService.addToPanier(this.product)
    this.product.quantity -= 1
  }

  modify() {
    this._router.navigate(["produits/modifier/" + this.product.name])
  }

  ngOnInit() {
  }

  deleteProduct() {

    if (confirm("Voulez vous vraiment supprimer ce produit?")) {

      this.productSrv.deleteProductByName(this.product.name)
                      .then(response => this.toDelete.emit())
                      .catch(err => console.log(err.message))

                      
    }

  }
}