import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { PanierService } from '../services/panier.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() product: Product

  constructor(private _router: Router, private _panierService: PanierService) { }

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
}