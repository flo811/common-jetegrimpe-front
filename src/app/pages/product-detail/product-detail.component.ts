import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/graphicalElements/services/product.service';
import { Product } from 'src/app/model/product';
import { ProductType } from 'src/app/model/productType';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  product: Product = new Product("", "", "", 0, ProductType.Accessoire, true, 0)
  quantityInvisible: boolean = true

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.productService.getByName(route.snapshot.paramMap.get("name"))
      .then(product => this.product = product)
      .then(() => this.quantityInvisible = this.product.quantity > 10)
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }
}