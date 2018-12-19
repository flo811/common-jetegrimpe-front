import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/graphicalElements/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  itemPerPage: number = 12
  pageNbr: number = 0
  pageNbrList: number[] = []

  types: string[] = Object.values(ProductType)

  name: string = ""
  category: string
  priceMin: number
  priceMax: number
  sort: string = "asc"

  resultList: Product[]

  constructor(private _route: ActivatedRoute, private _productService: ProductService) { }

  getPageType(): string { return this._route.snapshot.paramMap.get("type") }

  isAllPage(): boolean { return this.getPageType() == "Tout" }

  getPriceMin(): number { return this.priceMin == undefined ? 0 : this.priceMin }

  getPriceMax(): number { return this.priceMax == undefined ? Number.MAX_SAFE_INTEGER : this.priceMax }

  search() {
    this._productService.getResultNbr(this.name, this.category, this.getPriceMin(), this.getPriceMax())
      .then(nbr => { this.pageNbr = 1 + Math.floor(nbr / (1 + this.itemPerPage)); this.pageNbrList = Array(this.pageNbr).fill(1).map((x, i) => 1 + i); })
      .then(() => this.setPage(1))
      .catch(err => console.log(err))
  }

  setPage(nbr: number) {
    this._productService.getProductsMultiCriteria(this.name, this.category, this.getPriceMin(), this.getPriceMax(), this.sort, nbr, this.itemPerPage)
      .then(resultList => this.resultList = resultList)
      .catch(err => console.log(err))
  }

  userSubscription: Subscription;

  ngOnInit() {
    this.userSubscription = this._route.params.subscribe(
      () => { this.category = this.getPageType(); this.search() })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }
}