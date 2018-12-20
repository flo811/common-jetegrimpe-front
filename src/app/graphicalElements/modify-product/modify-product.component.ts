import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductType } from 'src/app/model/productType';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.scss']
})

export class ModifyProductComponent implements OnInit {

  oldProduct: Product

  name: string
  photo: string
  description: string
  price: number
  category: ProductType
  state: boolean
  quantity: number

  constructor(private _route: ActivatedRoute, private _prodService: ProductService) {
    _prodService.getByName(this._route.snapshot.paramMap.get("name"))
      .then(product => {
        this.oldProduct = product
        this.name = product.name
        this.photo = product.photo
        this.description = product.description
        this.price = product.price
        this.category = product.category
        this.state = product.state
        this.quantity = product.quantity
      })
  }

  modifyProduct() {
    this._prodService.modifyProduct(this.oldProduct.name, new Product(this.name, this.photo, this.description, this.price, this.category, this.state, this.quantity))
      .then(product => this.oldProduct = product)
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }
}