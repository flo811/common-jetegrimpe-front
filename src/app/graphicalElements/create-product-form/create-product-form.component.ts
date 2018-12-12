import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
// import { AuthService } from 'src/app/auth/auth.service';


class CreateProdForm {  name: string; photo: string; description: string; price: number;
  category: ProductType; state: boolean; quantity: number }

  


@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {

  createProdForm:CreateProdForm = new CreateProdForm();

  categoriesSelect:Array<any>;

  // constructor(private _authService:AuthService) { }
  constructor() { }

  ngOnInit() {
    this.categoriesSelect = [
      { value: ProductType.Chausson, label: 'Chausson' },
      { value: ProductType.Baudrier, label: 'Baudrier' },
      { value: ProductType.Assurage, label: 'Assurage' },
      { value: ProductType.Accessoire, label: 'Accessoire' },
      ];
  }

  submit() {
    console.log(this.createProdForm);
  }

}
