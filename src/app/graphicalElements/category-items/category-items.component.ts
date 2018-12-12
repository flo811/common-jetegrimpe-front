import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss']
})

export class CategoryItemsComponent implements OnInit {

  itemList: ProductItemComponent[]

  constructor(private type: ProductType ) {
    
   }

  ngOnInit() {
  }
}