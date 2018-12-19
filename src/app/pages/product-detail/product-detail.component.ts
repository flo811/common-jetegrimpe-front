import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/graphicalElements/services/product.service';
import { Product } from 'src/app/model/product';
import { ProductType } from 'src/app/model/productType';
import { PanierService } from 'src/app/graphicalElements/services/panier.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  product: Product = new Product("", "", "", 0, ProductType.Accessoire, true, 0)

  constructor(private route: ActivatedRoute, private productService: ProductService, private _panierService: PanierService) {
    this.productService.getByName(this.route.snapshot.paramMap.get("name"))
      .then(product => this.product = product)
      .catch(err => console.log(err))
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