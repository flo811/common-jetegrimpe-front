import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/graphicalElements/services/panier.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-panier-display',
  templateUrl: './panier-display.component.html',
  styleUrls: ['./panier-display.component.scss']
})

export class PanierDisplayComponent implements OnInit {

  panierList: Map<Product, number>

  constructor(private _panierService: PanierService) { this.actualize() }

  addOne(product: Product) {
    this._panierService.addToPanier(product)
    this.actualize()
  }

  subtractOne(product: Product) {
    this._panierService.removeItem(product)
    this.actualize()
  }

  actualize() { this.panierList = this._panierService.getPanier().articles}

  ngOnInit() {
  }
}