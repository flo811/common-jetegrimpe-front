import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() product: Product

  constructor(private _panierService: PanierService) { }

  addToPanier() { this._panierService.addToPanier(this.product) }

  ngOnInit() {
  }
}