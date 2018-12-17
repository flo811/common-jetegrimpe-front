import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';

class CreateProdForm {
  name: string; photo: string; description: string; price: number;
  category: ProductType; state: boolean; quantity: number
}

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {

  createProdForm: CreateProdForm = new CreateProdForm();

  // constructor(private _authService:AuthService) { }
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.createProdForm)
  }
}