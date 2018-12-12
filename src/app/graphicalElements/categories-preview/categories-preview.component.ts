import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';

@Component({
  selector: 'app-categories-preview',
  templateUrl: './categories-preview.component.html',
  styleUrls: ['./categories-preview.component.scss']
})

export class CategoriesPreviewComponent implements OnInit {

  types:string[]=Object.values(ProductType)

  constructor() {
   }

  ngOnInit() {
  }
}