import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/graphicalElements/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  itemPerPage: number = 4
  pageNbr: number = 0
  pageNbrList: number[] = []

  types: string[] = Object.values(ProductType)

  name: string = ""
  category: string = "tous"
  priceMin: number = 0
  priceMax: number = Number.MAX_SAFE_INTEGER
  sort: string = "asc"

  resultList: Product[]

  constructor(private _productService: ProductService) { }

  search() {
    this._productService.getResultNbr(this.name, this.category, this.priceMin, this.priceMax)
      .then(nbr => { this.pageNbr = 1 + Math.floor(nbr / (1 + this.itemPerPage)); this.pageNbrList = Array(this.pageNbr).fill(1).map((x, i) => 1 + i); })
      .then(() => this.setPage(1))
      .catch(err => console.log(err))
  }

  setPage(nbr: number) {
    this._productService.getProductsMultiCriteria(this.name, this.category, this.priceMin, this.priceMax, this.sort, nbr, this.itemPerPage)
      .then(resultList => this.resultList = resultList)
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }
}