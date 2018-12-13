import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss']
})

export class CategoryItemsComponent implements OnInit {

  NUMBER_OF_ITEMS: number = 4;

  @Input() type: string
  itemList: Product[]

  constructor(private _prodService: ProductService) {
  }

  ngOnInit() {
    this._prodService.getProducts(this.type, this.NUMBER_OF_ITEMS)
      .then(productList => { this.itemList = productList; console.log(this.itemList) })
      .catch(err => console.log(err))
  }
}