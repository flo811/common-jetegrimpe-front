import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})

export class CategoryItemsComponent implements OnInit {

  NUMBER_OF_ITEMS: number = 5
  itemList: Product[]

  constructor(private _type: ProductType, private _prodService: ProductService) {
    _prodService.getProducts(_type, this.NUMBER_OF_ITEMS)
      .then(productList => this.itemList = productList)
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }
}