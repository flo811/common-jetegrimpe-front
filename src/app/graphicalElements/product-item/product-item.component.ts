import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { PanierService } from '../services/panier.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() product: Product

  admin :boolean;

  constructor(private _panierService: PanierService, private _authSrv:AuthService) { 

    this._authSrv.collegueConnecteObs
    .subscribe(col => {this.admin = col.estConnuEtAdmin()});
  }

  isLessThan10(): boolean { return this.product.quantity < 10 }

  isAvailable(): boolean { return this.product.quantity > 0 }

  addToPanier() {
    this._panierService.addToPanier(this.product)
    this.product.quantity -= 1
  }

  ngOnInit() {
  }
}